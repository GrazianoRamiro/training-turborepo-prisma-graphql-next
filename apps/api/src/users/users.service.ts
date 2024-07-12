import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { User } from './users.model';
import { DatabaseService } from 'src/database/database.service';
import { usersErrorMessages } from './users.constants';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Promise<User[]> {
    try {
      return this.databaseService.client.user.findMany();
    } catch (error) {
      this.logger.error(usersErrorMessages.USERS_NOT_FOUND, error);

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
      this.logger.error(usersErrorMessages.USER_NOT_FOUND, error);

      throw new HttpException(
        usersErrorMessages.USER_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
