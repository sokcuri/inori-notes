import { Resolver, Query } from 'type-graphql';
import { GrandArenaDailyRankReward } from '../entities/GrandArenaDailyRankReward';

@Resolver()
export class GrandArenaDailyRankRewardResolver {
  @Query(() => [GrandArenaDailyRankReward])
  GrandArenaDailyRankReward() {
    return GrandArenaDailyRankReward.find();
  }
}
