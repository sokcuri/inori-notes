import { Resolver, Query } from 'type-graphql';
import { ClanBattleBossFixReward } from '../models/ClanBattleBossFixReward';

@Resolver()
export class ClanBattleBossFixRewardResolver {
  @Query(() => [ClanBattleBossFixReward])
  ClanBattleBossFixReward() {
    return ClanBattleBossFixReward.find();
  }
}
