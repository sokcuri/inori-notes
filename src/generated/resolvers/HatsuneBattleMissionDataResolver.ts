import { Resolver, Query } from 'type-graphql';
import { HatsuneBattleMissionData } from '../entities/HatsuneBattleMissionData';

@Resolver()
export class HatsuneBattleMissionDataResolver {
  @Query(() => [HatsuneBattleMissionData])
  HatsuneBattleMissionData() {
    return HatsuneBattleMissionData.find();
  }
}
