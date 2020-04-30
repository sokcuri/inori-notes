import { Resolver, Query } from 'type-graphql';
import { EventStoryData } from '../models/EventStoryData';

@Resolver()
export class EventStoryDataResolver {
  @Query(() => [EventStoryData])
  EventStoryData() {
    return EventStoryData.find();
  }
}
