import { Resolver } from '@nestjs/graphql';
import { Team } from './teams.model';

@Resolver(() => Team)
export class TeamsResolver {}
