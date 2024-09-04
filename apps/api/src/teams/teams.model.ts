import { Field, ObjectType } from '@nestjs/graphql';
import { Team as DatabaseTeam } from '@repo/db';

@ObjectType()
export class Team implements DatabaseTeam {
  @Field()
  id: number;
  code: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
