import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Season } from './seasons.model';
import { seasonsErrorMessages } from './seasons.constants';

@Injectable()
export class SeasonsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Season[]> {
    try {
      return this.databaseService.client.season.findMany();
    } catch (error) {
      throw new HttpException(
        seasonsErrorMessages.SEASONS_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
