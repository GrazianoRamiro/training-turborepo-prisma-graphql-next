import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Team } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';
import { teamsErrorMessages } from './teams.constants';

@Injectable()
export class TeamsService {
  private readonly logger = new Logger(TeamsService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Team[]> {
    try {
      return this.databaseService.client.team.findMany();
    } catch (error) {
      this.logger.error(teamsErrorMessages.TEAMS_NOT_FOUND, error);

      throw new HttpException(
        teamsErrorMessages.TEAMS_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
