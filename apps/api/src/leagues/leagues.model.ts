import { Field, ObjectType } from '@nestjs/graphql';
import { Country } from 'src/countries/countries.model';
import { League as DatabaseLeague } from '@repo/db';

@ObjectType()
export class League implements DatabaseLeague {
  @Field()
  id: number;
  @Field()
  name: string;
  @Field()
  logo: string;
  externalId: number;
  countryId: number;
  @Field(() => Country)
  country: Country;
  createdAt: Date;
  updatedAt: Date;
}
