import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MatchEvent } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';
import { matchEventsErrorMessages } from './match-events.constants';

@Injectable()
export class MatchEventsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<MatchEvent[]> {
    try {
      return this.databaseService.client.matchEvent.findMany();
    } catch (error) {
      throw new HttpException(
        matchEventsErrorMessages.MATCH_EVENTS_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
