import { Query, Resolver } from '@nestjs/graphql';
import { Player } from './players.model';
import { PlayersService } from './players.service';

@Resolver(() => Player)
export class PlayersResolver {
  constructor(private readonly playersService: PlayersService) {}

  @Query(() => [Player])
  players() {
    return this.playersService.findAll();
  }
}
