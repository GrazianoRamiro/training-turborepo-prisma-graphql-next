import { Injectable } from '@nestjs/common';
import { MatchEvent } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MatchEventsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<MatchEvent[]> {
    return this.databaseService.client.matchEvent.findMany();
  }
}
