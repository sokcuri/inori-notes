import { Resolver, Query } from 'type-graphql';
import { ClanBattlePeriodRankBonus } from '../models/ClanBattlePeriodRankBonus';

@Resolver()
export class ClanBattlePeriodRankBonusResolver {
  @Query(() => [ClanBattlePeriodRankBonus])
  ClanBattlePeriodRankBonus() {
    return ClanBattlePeriodRankBonus.find();
  }
}
