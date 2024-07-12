import { Query, Resolver } from '@nestjs/graphql';
import { MatchEvent } from './match-events.model';
import { MatchEventsService } from './match-events.service';

@Resolver(() => MatchEvent)
export class MatchEventsResolver {
  constructor(private readonly matchEventsService: MatchEventsService) {}

  @Query(() => [MatchEvent])
  matchEvents() {
    return this.matchEventsService.findAll();
  }
}
