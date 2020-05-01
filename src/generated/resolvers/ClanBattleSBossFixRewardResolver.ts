import { Resolver, Query } from 'type-graphql';
import { ClanBattleSBossFixReward } from '../entities/ClanBattleSBossFixReward';

@Resolver()
export class ClanBattleSBossFixRewardResolver {
  @Query(() => [ClanBattleSBossFixReward])
  ClanBattleSBossFixReward() {
    return ClanBattleSBossFixReward.find();
  }
}
