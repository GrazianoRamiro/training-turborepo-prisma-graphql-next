import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<User[]> {
    return this.databaseService.client.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.databaseService.client.user.findUnique({ where: { id } });
  }
}
