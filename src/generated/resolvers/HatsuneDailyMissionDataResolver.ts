import { Resolver, Query } from 'type-graphql';
import { HatsuneDailyMissionData } from '../models/HatsuneDailyMissionData';

@Resolver()
export class HatsuneDailyMissionDataResolver {
  @Query(() => [HatsuneDailyMissionData])
  HatsuneDailyMissionData() {
    return HatsuneDailyMissionData.find();
  }
}
