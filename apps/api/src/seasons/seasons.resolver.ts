import { Query, Resolver } from '@nestjs/graphql';
import { Season } from './seasons.model';
import { SeasonsService } from './seasons.service';

@Resolver(() => Season)
export class SeasonsResolver {
  constructor(private readonly seasonsService: SeasonsService) {}

  @Query(() => [Season])
  seasons() {
    return this.seasonsService.findAll();
  }
}
