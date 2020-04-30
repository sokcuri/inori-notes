import { Resolver, Query } from 'type-graphql';
import { FkeReward } from '../models/FkeReward';

@Resolver()
export class FkeRewardResolver {
  @Query(() => [FkeReward])
  FkeReward() {
    return FkeReward.find();
  }
}
