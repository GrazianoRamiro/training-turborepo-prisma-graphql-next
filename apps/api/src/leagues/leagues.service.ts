import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { League } from './leagues.model';
import { leaguesErrorMessages } from './leagues.constants';

@Injectable()
export class LeaguesService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<League[]> {
    try {
      return this.databaseService.client.league.findMany();
    } catch (error) {
      throw new HttpException(
        leaguesErrorMessages.LEAGUES_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
