import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Country } from './countries.model';
import { CountriesService } from './countries.service';

@Resolver(() => Country)
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}

  @Query(() => [Country])
  countries() {
    return this.countriesService.findAll();
  }

  @Query(() => Country)
  country(@Args('id', { type: () => Int }) id: number) {
    return this.countriesService.findOne(id);
  }
}
