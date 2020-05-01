import { Resolver, Query } from 'type-graphql';
import { ArenaDailyRankReward } from '../entities/ArenaDailyRankReward';

@Resolver()
export class ArenaDailyRankRewardResolver {
  @Query(() => [ArenaDailyRankReward])
  ArenaDailyRankReward() {
    return ArenaDailyRankReward.find();
  }
}
