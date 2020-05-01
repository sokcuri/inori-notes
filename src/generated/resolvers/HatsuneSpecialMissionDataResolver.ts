import { Resolver, Query } from 'type-graphql';
import { HatsuneSpecialMissionData } from '../entities/HatsuneSpecialMissionData';

@Resolver()
export class HatsuneSpecialMissionDataResolver {
  @Query(() => [HatsuneSpecialMissionData])
  HatsuneSpecialMissionData() {
    return HatsuneSpecialMissionData.find();
  }
}
