import { Resolver, Query } from 'type-graphql';
import { DailyMissionData } from '../entities/DailyMissionData';

@Resolver()
export class DailyMissionDataResolver {
  @Query(() => [DailyMissionData])
  DailyMissionData() {
    return DailyMissionData.find();
  }
}
