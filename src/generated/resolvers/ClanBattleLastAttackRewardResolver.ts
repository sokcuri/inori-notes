import { Resolver, Query } from 'type-graphql';
import { ClanBattleLastAttackReward } from '../entities/ClanBattleLastAttackReward';

@Resolver()
export class ClanBattleLastAttackRewardResolver {
  @Query(() => [ClanBattleLastAttackReward])
  ClanBattleLastAttackReward() {
    return ClanBattleLastAttackReward.find();
  }
}
