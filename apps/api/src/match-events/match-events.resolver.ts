import { Query, Resolver } from '@nestjs/graphql';
import { MatchEvent } from './match-events.model';
import { MatchEventsService } from './match-events.service';

@Resolver(() => MatchEvent)
export class MatchEventsResolver {
  private matchEventsService: MatchEventsService;
  constructor(matchEventsService: MatchEventsService) {
    this.matchEventsService = matchEventsService;
  }

  @Query(() => [MatchEvent])
  matchEvents() {
    return this.matchEventsService.findAll();
  }
}
