import { Injectable } from '@nestjs/common';
import { Team } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TeamsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Team[]> {
    return this.databaseService.client.team.findMany();
  }
}
