import { Resolver, Query } from 'type-graphql';
import { ArenaMaxRankReward } from '../models/ArenaMaxRankReward';

@Resolver()
export class ArenaMaxRankRewardResolver {
  @Query(() => [ArenaMaxRankReward])
  ArenaMaxRankReward() {
    return ArenaMaxRankReward.find();
  }
}
