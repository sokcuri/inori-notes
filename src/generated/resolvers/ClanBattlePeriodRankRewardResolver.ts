import { Resolver, Query } from 'type-graphql';
import { ClanBattlePeriodRankReward } from '../models/ClanBattlePeriodRankReward';

@Resolver()
export class ClanBattlePeriodRankRewardResolver {
  @Query(() => [ClanBattlePeriodRankReward])
  ClanBattlePeriodRankReward() {
    return ClanBattlePeriodRankReward.find();
  }
}
