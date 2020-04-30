import { Resolver, Query } from 'type-graphql';
import { EventSeriesWaveGroupData } from '../models/EventSeriesWaveGroupData';

@Resolver()
export class EventSeriesWaveGroupDataResolver {
  @Query(() => [EventSeriesWaveGroupData])
  EventSeriesWaveGroupData() {
    return EventSeriesWaveGroupData.find();
  }
}
