import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Match } from './matches.model';
import { matchesErrorMessages } from './matches.constants';

@Injectable()
export class MatchesService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Match[]> {
    try {
      return this.databaseService.client.match.findMany();
    } catch (error) {
      throw new HttpException(
        matchesErrorMessages.MATCHES_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
