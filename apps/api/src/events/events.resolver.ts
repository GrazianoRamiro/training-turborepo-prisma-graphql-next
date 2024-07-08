import { Resolver } from '@nestjs/graphql';
import { Event } from './events.model';

@Resolver(() => Event)
export class EventsResolver {}
