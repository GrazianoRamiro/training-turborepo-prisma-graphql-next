import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Player } from '@repo/db';
import { DatabaseService } from 'src/database/database.service';
import { playersErrorMessages } from './players.constants';

@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Player[]> {
    try {
      return this.databaseService.client.player.findMany();
    } catch (error) {
      this.logger.error(playersErrorMessages.PLAYERS_NOT_FOUND, error);

      throw new HttpException(
        playersErrorMessages.PLAYERS_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
