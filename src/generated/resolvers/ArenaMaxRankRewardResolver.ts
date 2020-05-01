import { Resolver, Query } from 'type-graphql';
import { ArenaMaxRankReward } from '../entities/ArenaMaxRankReward';

@Resolver()
export class ArenaMaxRankRewardResolver {
  @Query(() => [ArenaMaxRankReward])
  ArenaMaxRankReward() {
    return ArenaMaxRankReward.find();
  }
}
