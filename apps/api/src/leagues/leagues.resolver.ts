import { Query, Resolver } from '@nestjs/graphql';
import { League } from './leagues.model';
import { LeaguesService } from './leagues.service';

@Resolver(() => League)
export class LeaguesResolver {
  constructor(private readonly leaguesService: LeaguesService) {}

  @Query(() => [League])
  leagues() {
    return this.leaguesService.findAll();
  }
}
