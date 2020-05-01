import { Resolver, Query } from 'type-graphql';
import { EventSeriesWaveGroupData } from '../entities/EventSeriesWaveGroupData';

@Resolver()
export class EventSeriesWaveGroupDataResolver {
  @Query(() => [EventSeriesWaveGroupData])
  EventSeriesWaveGroupData() {
    return EventSeriesWaveGroupData.find();
  }
}
