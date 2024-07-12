import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { League } from './leagues.model';

@Injectable()
export class LeaguesService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<League[]> {
    return this.databaseService.client.league.findMany();
  }
}
