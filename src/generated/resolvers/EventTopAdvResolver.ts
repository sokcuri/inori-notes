import { Resolver, Query } from 'type-graphql';
import { EventTopAdv } from '../entities/EventTopAdv';

@Resolver()
export class EventTopAdvResolver {
  @Query(() => [EventTopAdv])
  EventTopAdv() {
    return EventTopAdv.find();
  }
}
