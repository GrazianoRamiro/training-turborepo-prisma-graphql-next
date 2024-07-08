import { Query, Resolver } from '@nestjs/graphql';
import { Player } from './players.model';
import { PlayersService } from './players.service';

@Resolver(() => Player)
export class PlayersResolver {
  private playersService: PlayersService;

  constructor(playersService: PlayersService) {
    this.playersService = playersService;
  }

  @Query(() => [Player])
  players() {
    return this.playersService.findAll();
  }
}
