import { Resolver, Query } from 'type-graphql';
import { GrandArenaMaxSeasonRankReward } from '../entities/GrandArenaMaxSeasonRankReward';

@Resolver()
export class GrandArenaMaxSeasonRankRewardResolver {
  @Query(() => [GrandArenaMaxSeasonRankReward])
  GrandArenaMaxSeasonRankReward() {
    return GrandArenaMaxSeasonRankReward.find();
  }
}
