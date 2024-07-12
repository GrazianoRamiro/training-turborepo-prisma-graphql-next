import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { DatabaseService } from 'src/database/database.service';
import { usersErrorMessages } from './users.constants';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<User[]> {
    try {
      return this.databaseService.client.user.findMany();
    } catch (error) {
      throw new HttpException(
        usersErrorMessages.USERS_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findOne(id: number): Promise<User> {
    try {
      return this.databaseService.client.user.findUnique({ where: { id } });
    } catch (error) {
      throw new HttpException(
        usersErrorMessages.USER_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
