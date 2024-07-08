import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Match } from './matches.model';

@Injectable()
export class MatchesService {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  findAll(): Promise<Match[]> {
    return this.databaseService.client.match.findMany();
  }
}
