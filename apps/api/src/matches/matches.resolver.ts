import { Query, Resolver } from '@nestjs/graphql';
import { Match } from './matches.model';
import { MatchesService } from './matches.service';

@Resolver(() => Match)
export class MatchesResolver {
  private matchesService: MatchesService;

  constructor(matchesService: MatchesService) {
    this.matchesService = matchesService;
  }

  @Query(() => [Match])
  matches() {
    return this.matchesService.findAll();
  }
}
