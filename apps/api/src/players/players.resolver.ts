import { Resolver } from '@nestjs/graphql';
import { Player } from './players.model';

@Resolver(() => Player)
export class PlayersResolver {}
