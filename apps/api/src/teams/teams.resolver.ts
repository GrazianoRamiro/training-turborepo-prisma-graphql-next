import { Query, Resolver } from '@nestjs/graphql';
import { Team } from './teams.model';
import { TeamsService } from './teams.service';

@Resolver(() => Team)
export class TeamsResolver {
  private teamsService: TeamsService;

  constructor(teamsService: TeamsService) {
    this.teamsService = teamsService;
  }

  @Query(() => [Team])
  teams() {
    return this.teamsService.findAll();
  }
}
