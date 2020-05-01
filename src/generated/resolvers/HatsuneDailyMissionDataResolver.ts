import { Resolver, Query } from 'type-graphql';
import { HatsuneDailyMissionData } from '../entities/HatsuneDailyMissionData';

@Resolver()
export class HatsuneDailyMissionDataResolver {
  @Query(() => [HatsuneDailyMissionData])
  HatsuneDailyMissionData() {
    return HatsuneDailyMissionData.find();
  }
}
