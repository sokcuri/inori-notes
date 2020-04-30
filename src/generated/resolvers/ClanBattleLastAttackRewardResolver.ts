import { Resolver, Query } from 'type-graphql';
import { ClanBattleLastAttackReward } from '../models/ClanBattleLastAttackReward';

@Resolver()
export class ClanBattleLastAttackRewardResolver {
  @Query(() => [ClanBattleLastAttackReward])
  ClanBattleLastAttackReward() {
    return ClanBattleLastAttackReward.find();
  }
}
