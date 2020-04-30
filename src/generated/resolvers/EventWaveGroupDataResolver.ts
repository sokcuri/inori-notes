import { Resolver, Query } from 'type-graphql';
import { EventWaveGroupData } from '../models/EventWaveGroupData';

@Resolver()
export class EventWaveGroupDataResolver {
  @Query(() => [EventWaveGroupData])
  EventWaveGroupData() {
    return EventWaveGroupData.find();
  }
}
