import { Field, ObjectType } from '@nestjs/graphql';
import { League as DatabaseLeague } from '@repo/db';

@ObjectType()
export class League implements DatabaseLeague {
  @Field()
  id: number;
  name: string;
  seasonId: number;
  createdAt: Date;
  updatedAt: Date;
}
