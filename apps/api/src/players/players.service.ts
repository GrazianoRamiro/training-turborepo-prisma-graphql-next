import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Player } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';
import { playersErrorMessages } from './players.constants';

@Injectable()
export class PlayersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Player[]> {
    try {
      return this.databaseService.client.player.findMany();
    } catch (error) {
      throw new HttpException(
        playersErrorMessages.PLAYERS_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
