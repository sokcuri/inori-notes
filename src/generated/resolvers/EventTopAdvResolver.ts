import { Resolver, Query } from 'type-graphql';
import { EventTopAdv } from '../models/EventTopAdv';

@Resolver()
export class EventTopAdvResolver {
  @Query(() => [EventTopAdv])
  EventTopAdv() {
    return EventTopAdv.find();
  }
}
