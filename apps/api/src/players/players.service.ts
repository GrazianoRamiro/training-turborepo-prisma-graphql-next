import { Injectable } from '@nestjs/common';
import { Player } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PlayersService {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  findAll(): Promise<Player[]> {
    return this.databaseService.client.player.findMany();
  }
}
