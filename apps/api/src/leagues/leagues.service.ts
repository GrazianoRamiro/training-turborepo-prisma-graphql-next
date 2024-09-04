import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { League } from './leagues.model';
import { leaguesErrorMessages } from './leagues.constants';

@Injectable()
export class LeaguesService {
  private readonly logger = new Logger(LeaguesService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<League[]> {
    try {
      return this.databaseService.client.league.findMany({
        include: { country: true },
      });
    } catch (error) {
      this.logger.error(leaguesErrorMessages.LEAGUES_NOT_FOUND, error);

      throw new HttpException(
        leaguesErrorMessages.LEAGUES_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
