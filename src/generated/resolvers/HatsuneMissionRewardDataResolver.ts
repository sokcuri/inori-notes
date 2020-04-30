import { Resolver, Query } from 'type-graphql';
import { HatsuneMissionRewardData } from '../models/HatsuneMissionRewardData';

@Resolver()
export class HatsuneMissionRewardDataResolver {
  @Query(() => [HatsuneMissionRewardData])
  HatsuneMissionRewardData() {
    return HatsuneMissionRewardData.find();
  }
}
