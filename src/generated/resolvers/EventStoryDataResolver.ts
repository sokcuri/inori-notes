import { Resolver, Query } from 'type-graphql';
import { EventStoryData } from '../entities/EventStoryData';

@Resolver()
export class EventStoryDataResolver {
  @Query(() => [EventStoryData])
  EventStoryData() {
    return EventStoryData.find();
  }
}
