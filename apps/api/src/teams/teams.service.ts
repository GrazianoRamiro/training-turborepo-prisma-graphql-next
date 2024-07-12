import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Team } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';
import { teamsErrorMessages } from './teams.constants';

@Injectable()
export class TeamsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Team[]> {
    try {
      return this.databaseService.client.team.findMany();
    } catch (error) {
      throw new HttpException(
        teamsErrorMessages.TEAMS_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
