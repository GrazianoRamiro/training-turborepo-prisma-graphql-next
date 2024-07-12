import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Match } from './matches.model';

@Injectable()
export class MatchesService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Match[]> {
    return this.databaseService.client.match.findMany();
  }
}
