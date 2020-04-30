import { Resolver, Query } from 'type-graphql';
import { DailyMissionData } from '../models/DailyMissionData';

@Resolver()
export class DailyMissionDataResolver {
  @Query(() => [DailyMissionData])
  DailyMissionData() {
    return DailyMissionData.find();
  }
}
