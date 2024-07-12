import { Query, Resolver } from '@nestjs/graphql';
import { Match } from './matches.model';
import { MatchesService } from './matches.service';

@Resolver(() => Match)
export class MatchesResolver {
  constructor(private readonly matchesService: MatchesService) {}

  @Query(() => [Match])
  matches() {
    return this.matchesService.findAll();
  }
}
