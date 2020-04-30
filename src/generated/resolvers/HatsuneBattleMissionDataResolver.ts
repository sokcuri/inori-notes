import { Resolver, Query } from 'type-graphql';
import { HatsuneBattleMissionData } from '../models/HatsuneBattleMissionData';

@Resolver()
export class HatsuneBattleMissionDataResolver {
  @Query(() => [HatsuneBattleMissionData])
  HatsuneBattleMissionData() {
    return HatsuneBattleMissionData.find();
  }
}
