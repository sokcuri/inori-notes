import { Resolver, Query } from 'type-graphql';
import { EventRevivalWaveGroupData } from '../models/EventRevivalWaveGroupData';

@Resolver()
export class EventRevivalWaveGroupDataResolver {
  @Query(() => [EventRevivalWaveGroupData])
  EventRevivalWaveGroupData() {
    return EventRevivalWaveGroupData.find();
  }
}
