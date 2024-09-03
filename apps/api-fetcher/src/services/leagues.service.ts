import { Country, League, Season } from '@repo/db';
import { footballService } from './api-football.service';
import { databaseService } from './database.service';
import { FetchLeaguesResponse } from '../models/api-football.models';
import * as fs from 'fs';
import * as path from 'path';
import { LEAGUE_TYPE } from '../constants/api-football.constants';

type TempLeague = League & { countryCode: string };

class LeaguesService {
  private jsonFilePath = path.join(__dirname, 'leagues-data.json');

  async fetchLeagues(
    useJsonFile: boolean = false,
  ): Promise<FetchLeaguesResponse[]> {
    if (useJsonFile) {
      const jsonData = this.readLeaguesFromJson();

      if (jsonData && jsonData.length) {
        return jsonData;
      }
    }

    try {
      const {
        data: { response },
      } = await footballService.get('/leagues');

      /**
       * Filtered done to reduce number of results for easier testability
       */
      const filteredResponse = response
        .filter(
          ({ league, seasons }: FetchLeaguesResponse) =>
            league.type === LEAGUE_TYPE.LEAGUE &&
            seasons.some((season) => season.year >= 2023),
        )
        .map(({ seasons, ...rest }: FetchLeaguesResponse) => ({
          ...rest,
          seasons: seasons.filter((season) => season.year >= 2023),
        }));

      const shouldStoreJson =
        process.env.STORE_LEAGUES_JSON &&
        process.env.STORE_LEAGUES_JSON !== 'false';

      if (shouldStoreJson) {
        this.updateLeaguesOnJson(filteredResponse);
      }

      return filteredResponse;
    } catch (error) {
      console.error('[Leagues Service] Error fetching leagues', error);
      throw new Error('[Leagues Service] Error fetching leagues');
    }
  }

  private updateLeaguesOnJson(response: FetchLeaguesResponse[]): void {
    console.log(`Leagues data written to ${this.jsonFilePath}`);
    const data = JSON.stringify(response, null, 2);
    fs.writeFileSync(this.jsonFilePath, data);
  }

  private readLeaguesFromJson(): FetchLeaguesResponse[] | null {
    try {
      const data = fs.readFileSync(this.jsonFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error('[Leagues Service] Error reading leagues from JSON', error);
      return null;
    }
  }

  async storeLeagues(array: FetchLeaguesResponse[]) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error('[Leagues Service] Invalid input for storing leagues');
    }

    try {
      const { countries, seasons, leagues, leagueSeasonsMap } =
        this.prepareData(array);

      const [dbCountriesMap, dbSeasonsMap] = await Promise.all([
        this.createAndMapCountries(countries),
        this.createAndMapSeasons(seasons),
      ]);

      const dbLeagues = await this.createLeagues(leagues, dbCountriesMap);
      await this.createLeagueSeasons(dbLeagues, leagueSeasonsMap, dbSeasonsMap);

      return dbLeagues;
    } catch (error) {
      console.error('[Leagues Service] Error storing leagues', error);
      throw new Error('[Leagues Service] Error storing leagues');
    }
  }

  private prepareData(array: FetchLeaguesResponse[]) {
    const countries: Country[] = [];
    const seasons: Season[] = [];
    const leagues: TempLeague[] = [];
    const leagueSeasonsMap: Map<string, Set<number>> = new Map();

    for (const { country, seasons: leagueSeasons, league } of array) {
      countries.push({
        name: country.name,
        code: country.code,
        flag: country.flag,
      } as Country);

      leagueSeasons.forEach((season) => {
        seasons.push({
          year: season.year,
          start: new Date(season.start),
          end: new Date(season.end),
          current: season.current,
        } as Season);

        if (!leagueSeasonsMap.has(league.name)) {
          leagueSeasonsMap.set(league.name, new Set());
        }

        leagueSeasonsMap.get(league.name)?.add(season.year);
      });

      leagues.push({
        name: league.name,
        logo: league.logo,
        externalId: league.id,
        countryCode: country.code || country.name,
      } as TempLeague);
    }

    return { countries, seasons, leagues, leagueSeasonsMap };
  }

  private async createAndMapCountries(
    countries: Country[],
  ): Promise<Record<string, Country>> {
    const uniqueCountries = new Set(
      countries.map((country) => JSON.stringify(country)),
    );
    const deduplicatedCountries = Array.from(uniqueCountries).map(
      (countryString) => JSON.parse(countryString),
    );

    const dbCountries =
      await databaseService.client.country.createManyAndReturn({
        data: deduplicatedCountries,
        skipDuplicates: true,
      });

    return dbCountries.reduce(
      (acc, country) => {
        acc[country.code || country.name] = country;
        return acc;
      },
      {} as Record<string, Country>,
    );
  }

  private async createAndMapSeasons(
    seasons: Season[],
  ): Promise<Record<number, Season>> {
    const uniqueSeasons = new Set(
      seasons.map((season) => JSON.stringify(season)),
    );
    const deduplicatedSeasons = Array.from(uniqueSeasons).map((seasonString) =>
      JSON.parse(seasonString),
    );

    const dbSeasons = await databaseService.client.season.createManyAndReturn({
      data: deduplicatedSeasons,
      skipDuplicates: true,
    });

    return dbSeasons.reduce(
      (acc, season) => {
        acc[season.year] = season;
        return acc;
      },
      {} as Record<number, Season>,
    );
  }

  private async createLeagues(
    leagues: TempLeague[],
    countriesMap: Record<string, Country>,
  ): Promise<League[]> {
    const leaguesWithCountryIds = leagues.map(({ countryCode, ...league }) => ({
      ...(league as League),
      countryId: countriesMap[countryCode]?.id || 0,
    }));

    await databaseService.client.league.createMany({
      data: leaguesWithCountryIds,
      skipDuplicates: true,
    });

    return databaseService.client.league.findMany();
  }

  private async createLeagueSeasons(
    leagues: League[],
    leagueSeasonsMap: Map<string, Set<number>>,
    seasonsMap: Record<number, Season>,
  ): Promise<void> {
    const leagueSeasons: { leagueId: number; seasonId: number }[] = [];

    for (const league of leagues) {
      const seasonYears = leagueSeasonsMap.get(league.name) || new Set();
      for (const year of seasonYears) {
        const seasonId = seasonsMap[year]?.id;
        if (seasonId) {
          leagueSeasons.push({
            leagueId: league.id,
            seasonId: seasonId,
          });
        }
      }
    }

    await databaseService.client.leagueSeason.createMany({
      data: leagueSeasons,
      skipDuplicates: true,
    });
  }
}

export const leaguesService = new LeaguesService();
