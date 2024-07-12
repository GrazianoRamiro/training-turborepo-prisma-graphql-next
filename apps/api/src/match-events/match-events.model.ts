import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, MatchEvent as DatabaseMatchEvent } from '@repo/db';

@ObjectType()
export class MatchEvent implements DatabaseMatchEvent {
  @Field()
  id: number;
  matchId: number;
  playerId: number;
  type: $Enums.EventType;
  matchMinute: number;
  details: string;
  createdAt: Date;
}
