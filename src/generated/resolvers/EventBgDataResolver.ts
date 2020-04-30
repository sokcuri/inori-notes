import { Resolver, Query } from 'type-graphql';
import { EventBgData } from '../models/EventBgData';

@Resolver()
export class EventBgDataResolver {
  @Query(() => [EventBgData])
  EventBgData() {
    return EventBgData.find();
  }
}
