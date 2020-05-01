import { Resolver, Query } from 'type-graphql';
import { EventBgData } from '../entities/EventBgData';

@Resolver()
export class EventBgDataResolver {
  @Query(() => [EventBgData])
  EventBgData() {
    return EventBgData.find();
  }
}
