import { Field, ObjectType } from '@nestjs/graphql';
import { Season as DatabaseSeason } from '@repo/db';

@ObjectType()
export class Season implements DatabaseSeason {
  @Field()
  id: number;
  name: string;
  dateFrom: Date;
  dateTo: Date;
  createdAt: Date;
  updatedAt: Date;
}
