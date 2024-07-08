import { Resolver } from '@nestjs/graphql';
import { Season } from './seasons.model';

@Resolver(() => Season)
export class SeasonsResolver {}
