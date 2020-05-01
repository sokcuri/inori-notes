import { Resolver, Query } from 'type-graphql';
import { FkeReward } from '../entities/FkeReward';

@Resolver()
export class FkeRewardResolver {
  @Query(() => [FkeReward])
  FkeReward() {
    return FkeReward.find();
  }
}
