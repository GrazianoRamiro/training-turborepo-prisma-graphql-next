import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Match as DatabaseMatch } from '@repo/db';

@ObjectType()
export class Match implements DatabaseMatch {
  @Field()
  id: number;

  leagueId: number;
  status: $Enums.MatchStatus;
  date: Date;
  location: string;
  homeTeamId: number;
  awayTeamId: number;
  homeScore: number;
  awayScore: number;
  createdAt: Date;
  updatedAt: Date;
}
