import { Resolver, Query } from 'type-graphql';
import { HatsuneEmblemMissionReward } from '../entities/HatsuneEmblemMissionReward';

@Resolver()
export class HatsuneEmblemMissionRewardResolver {
  @Query(() => [HatsuneEmblemMissionReward])
  HatsuneEmblemMissionReward() {
    return HatsuneEmblemMissionReward.find();
  }
}
