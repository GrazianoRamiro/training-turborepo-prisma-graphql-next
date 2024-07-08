import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  async users() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }
}
