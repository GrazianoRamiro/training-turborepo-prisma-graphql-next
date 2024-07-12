import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Match } from './matches.model';
import { matchesErrorMessages } from './matches.constants';

@Injectable()
export class MatchesService {
  private readonly logger = new Logger(MatchesService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Match[]> {
    try {
      return this.databaseService.client.match.findMany();
    } catch (error) {
      this.logger.error(matchesErrorMessages.MATCHES_NOT_FOUND, error);

      throw new HttpException(
        matchesErrorMessages.MATCHES_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
