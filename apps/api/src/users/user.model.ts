import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User as DatabaseUser } from '@repo/db';

@ObjectType()
export default class User implements DatabaseUser {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
