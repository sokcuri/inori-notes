import { Resolver, Query } from 'type-graphql';
import { HatsuneQuizReward } from '../entities/HatsuneQuizReward';

@Resolver()
export class HatsuneQuizRewardResolver {
  @Query(() => [HatsuneQuizReward])
  HatsuneQuizReward() {
    return HatsuneQuizReward.find();
  }
}
