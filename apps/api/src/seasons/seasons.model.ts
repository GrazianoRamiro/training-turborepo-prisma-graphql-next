import { Field, ObjectType } from '@nestjs/graphql';
import { Season as DatabaseSeason } from '@repo/db';

@ObjectType()
export class Season implements DatabaseSeason {
  @Field()
  id: number;
  year: number;
  start: Date;
  end: Date;
  current: boolean;
  createdAt: Date;
  updatedAt: Date;
}
