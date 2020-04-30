import { Resolver, Query } from 'type-graphql';
import { MissionRewardData } from '../models/MissionRewardData';

@Resolver()
export class MissionRewardDataResolver {
  @Query(() => [MissionRewardData])
  MissionRewardData() {
    return MissionRewardData.find();
  }
}
