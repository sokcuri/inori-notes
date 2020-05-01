import { Resolver, Query } from 'type-graphql';
import { SekaiBossDamageRankReward } from '../entities/SekaiBossDamageRankReward';

@Resolver()
export class SekaiBossDamageRankRewardResolver {
  @Query(() => [SekaiBossDamageRankReward])
  SekaiBossDamageRankReward() {
    return SekaiBossDamageRankReward.find();
  }
}
