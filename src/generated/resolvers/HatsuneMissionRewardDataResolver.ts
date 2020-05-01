import { Resolver, Query } from 'type-graphql';
import { HatsuneMissionRewardData } from '../entities/HatsuneMissionRewardData';

@Resolver()
export class HatsuneMissionRewardDataResolver {
  @Query(() => [HatsuneMissionRewardData])
  HatsuneMissionRewardData() {
    return HatsuneMissionRewardData.find();
  }
}
