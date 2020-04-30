import { Resolver, Query } from 'type-graphql';
import { GrandArenaMaxSeasonRankReward } from '../models/GrandArenaMaxSeasonRankReward';

@Resolver()
export class GrandArenaMaxSeasonRankRewardResolver {
  @Query(() => [GrandArenaMaxSeasonRankReward])
  GrandArenaMaxSeasonRankReward() {
    return GrandArenaMaxSeasonRankReward.find();
  }
}
