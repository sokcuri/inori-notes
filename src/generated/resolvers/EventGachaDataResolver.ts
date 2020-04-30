import { Resolver, Query } from 'type-graphql';
import { EventGachaData } from '../models/EventGachaData';

@Resolver()
export class EventGachaDataResolver {
  @Query(() => [EventGachaData])
  EventGachaData() {
    return EventGachaData.find();
  }
}
