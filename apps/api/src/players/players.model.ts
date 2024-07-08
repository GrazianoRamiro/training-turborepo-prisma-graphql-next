import { Field, ObjectType } from '@nestjs/graphql';
import { Player as DatabasePlayer } from '@repo/db';
@ObjectType()
export class Player implements DatabasePlayer {
  @Field()
  id: number;
  name: string;
  position: string;
  createdAt: Date;
  updatedAt: Date;
}
