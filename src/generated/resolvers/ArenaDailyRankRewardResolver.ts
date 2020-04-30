import { Resolver, Query } from 'type-graphql';
import { ArenaDailyRankReward } from '../models/ArenaDailyRankReward';

@Resolver()
export class ArenaDailyRankRewardResolver {
  @Query(() => [ArenaDailyRankReward])
  ArenaDailyRankReward() {
    return ArenaDailyRankReward.find();
  }
}
