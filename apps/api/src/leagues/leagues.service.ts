import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { League } from './leagues.model';

@Injectable()
export class LeaguesService {
  private databaseService: DatabaseService;
  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  findAll(): Promise<League[]> {
    return this.databaseService.client.league.findMany();
  }
}
