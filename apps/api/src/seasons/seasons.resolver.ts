import { Query, Resolver } from '@nestjs/graphql';
import { Season } from './seasons.model';
import { SeasonsService } from './seasons.service';

@Resolver(() => Season)
export class SeasonsResolver {
  private seasonsService: SeasonsService;

  constructor(seasonsService: SeasonsService) {
    this.seasonsService = seasonsService;
  }

  @Query(() => [Season])
  seasons() {
    return this.seasonsService.findAll();
  }
}
