import { Field, ObjectType } from '@nestjs/graphql';
import { Country as DatabaseCountry } from '@repo/db';

@ObjectType()
export class Country implements DatabaseCountry {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  code: string;
  @Field({ nullable: true })
  flag: string;
  createdAt: Date;
  updatedAt: Date;
}
