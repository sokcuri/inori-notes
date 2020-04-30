import { Resolver, Query } from 'type-graphql';
import { HatsuneSpecialMissionData } from '../models/HatsuneSpecialMissionData';

@Resolver()
export class HatsuneSpecialMissionDataResolver {
  @Query(() => [HatsuneSpecialMissionData])
  HatsuneSpecialMissionData() {
    return HatsuneSpecialMissionData.find();
  }
}
