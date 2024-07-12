import { Injectable } from '@nestjs/common';
import { Player } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PlayersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Player[]> {
    return this.databaseService.client.player.findMany();
  }
}
