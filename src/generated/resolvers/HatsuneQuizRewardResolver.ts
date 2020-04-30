import { Resolver, Query } from 'type-graphql';
import { HatsuneQuizReward } from '../models/HatsuneQuizReward';

@Resolver()
export class HatsuneQuizRewardResolver {
  @Query(() => [HatsuneQuizReward])
  HatsuneQuizReward() {
    return HatsuneQuizReward.find();
  }
}
