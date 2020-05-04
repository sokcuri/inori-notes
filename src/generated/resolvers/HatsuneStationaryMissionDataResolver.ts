import { Resolver, Query } from 'type-graphql';
import { HatsuneStationaryMissionData } from '../entities/HatsuneStationaryMissionData';

@Resolver()
export class HatsuneStationaryMissionDataResolver {
  @Query(() => [HatsuneStationaryMissionData])
  HatsuneStationaryMissionData() {
    return HatsuneStationaryMissionData.find();
  }
}
