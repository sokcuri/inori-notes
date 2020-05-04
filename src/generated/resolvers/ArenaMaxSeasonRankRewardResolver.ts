import { Resolver, Query } from 'type-graphql';
import { ArenaMaxSeasonRankReward } from '../entities/ArenaMaxSeasonRankReward';

@Resolver()
export class ArenaMaxSeasonRankRewardResolver {
  @Query(() => [ArenaMaxSeasonRankReward])
  ArenaMaxSeasonRankReward() {
    return ArenaMaxSeasonRankReward.find();
  }
}
