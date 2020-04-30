import { Resolver, Query } from 'type-graphql';
import { ClanBattleHpResetCost } from '../models/ClanBattleHpResetCost';

@Resolver()
export class ClanBattleHpResetCostResolver {
  @Query(() => [ClanBattleHpResetCost])
  ClanBattleHpResetCost() {
    return ClanBattleHpResetCost.find();
  }
}
