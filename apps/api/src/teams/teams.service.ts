import { Injectable } from '@nestjs/common';
import { Team } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeamsService {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  findAll(): Promise<Team[]> {
    return this.databaseService.client.team.findMany();
  }
}
