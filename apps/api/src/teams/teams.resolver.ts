import { Query, Resolver } from '@nestjs/graphql';
import { Team } from './teams.model';
import { TeamsService } from './teams.service';

@Resolver(() => Team)
export class TeamsResolver {
  constructor(private readonly teamsService: TeamsService) {}

  @Query(() => [Team])
  teams() {
    return this.teamsService.findAll();
  }
}
