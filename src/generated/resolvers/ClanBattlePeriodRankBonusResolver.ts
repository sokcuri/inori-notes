import { Resolver, Query } from 'type-graphql';
import { ClanBattlePeriodRankBonus } from '../entities/ClanBattlePeriodRankBonus';

@Resolver()
export class ClanBattlePeriodRankBonusResolver {
  @Query(() => [ClanBattlePeriodRankBonus])
  ClanBattlePeriodRankBonus() {
    return ClanBattlePeriodRankBonus.find();
  }
}
