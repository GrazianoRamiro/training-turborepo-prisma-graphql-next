import { Resolver } from '@nestjs/graphql';
import { League } from './leagues.model';

@Resolver(() => League)
export class LeaguesResolver {}
