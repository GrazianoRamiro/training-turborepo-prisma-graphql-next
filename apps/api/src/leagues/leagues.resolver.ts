import { Query, Resolver } from '@nestjs/graphql';
import { League } from './leagues.model';
import { LeaguesService } from './leagues.service';

@Resolver(() => League)
export class LeaguesResolver {
  private leaguesService: LeaguesService;

  constructor(leaguesService: LeaguesService) {
    this.leaguesService = leaguesService;
  }

  @Query(() => [League])
  leagues() {
    return this.leaguesService.findAll();
  }
}
