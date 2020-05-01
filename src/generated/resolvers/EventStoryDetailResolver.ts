import { Resolver, Query } from 'type-graphql';
import { EventStoryDetail } from '../entities/EventStoryDetail';

@Resolver()
export class EventStoryDetailResolver {
  @Query(() => [EventStoryDetail])
  EventStoryDetail() {
    return EventStoryDetail.find();
  }
}
