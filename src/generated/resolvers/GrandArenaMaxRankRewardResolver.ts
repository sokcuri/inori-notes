import { Resolver, Query } from 'type-graphql';
import { GrandArenaMaxRankReward } from '../models/GrandArenaMaxRankReward';

@Resolver()
export class GrandArenaMaxRankRewardResolver {
  @Query(() => [GrandArenaMaxRankReward])
  GrandArenaMaxRankReward() {
    return GrandArenaMaxRankReward.find();
  }
}
