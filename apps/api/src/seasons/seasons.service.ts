import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Season } from './seasons.model';

@Injectable()
export class SeasonsService {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  findAll(): Promise<Season[]> {
    return this.databaseService.client.season.findMany();
  }
}
