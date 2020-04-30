import { Resolver, Query } from 'type-graphql';
import { EventStoryDetail } from '../models/EventStoryDetail';

@Resolver()
export class EventStoryDetailResolver {
  @Query(() => [EventStoryDetail])
  EventStoryDetail() {
    return EventStoryDetail.find();
  }
}
