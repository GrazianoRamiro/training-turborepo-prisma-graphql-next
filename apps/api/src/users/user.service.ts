import { Injectable } from '@nestjs/common';
import User from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      email: 'email',
      password: '123',
      name: 'John Doe',
      createdAt: undefined,
      updatedAt: undefined,
    },
    {
      id: 2,
      email: 'email',
      password: '123',
      name: 'John Doe 2',
      createdAt: undefined,
      updatedAt: undefined,
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  create(user: User): User {
    this.users.push(user);
    return user;
  }
}
