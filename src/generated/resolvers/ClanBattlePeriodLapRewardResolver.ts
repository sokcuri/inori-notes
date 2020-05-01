import { Resolver, Query } from 'type-graphql';
import { ClanBattlePeriodLapReward } from '../entities/ClanBattlePeriodLapReward';

@Resolver()
export class ClanBattlePeriodLapRewardResolver {
  @Query(() => [ClanBattlePeriodLapReward])
  ClanBattlePeriodLapReward() {
    return ClanBattlePeriodLapReward.find();
  }
}
