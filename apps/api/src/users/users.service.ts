import { Injectable } from '@nestjs/common';
import User from './users.model';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  private databaseService: DatabaseService;

  constructor(databaseService: DatabaseService) {
    this.databaseService = databaseService;
  }

  findAll(): Promise<User[]> {
    return this.databaseService.client.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.databaseService.client.user.findUnique({ where: { id } });
  }
}
