import { Resolver, Query } from 'type-graphql';
import { EventGachaData } from '../entities/EventGachaData';

@Resolver()
export class EventGachaDataResolver {
  @Query(() => [EventGachaData])
  EventGachaData() {
    return EventGachaData.find();
  }
}
