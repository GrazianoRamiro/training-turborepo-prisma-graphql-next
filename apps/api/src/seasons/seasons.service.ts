import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Season } from './seasons.model';

@Injectable()
export class SeasonsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<Season[]> {
    return this.databaseService.client.season.findMany();
  }
}
