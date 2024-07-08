import { Injectable } from '@nestjs/common';
import { MatchEvent } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MatchEventsService {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  findAll(): Promise<MatchEvent[]> {
    return this.databaseService.client.matchEvent.findMany();
  }
}
