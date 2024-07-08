import { Resolver } from '@nestjs/graphql';
import { Match } from './matches.model';

@Resolver(() => Match)
export class MatchesResolver {}
