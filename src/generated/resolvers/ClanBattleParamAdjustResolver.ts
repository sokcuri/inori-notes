import { Resolver, Query } from 'type-graphql';
import { ClanBattleParamAdjust } from '../entities/ClanBattleParamAdjust';

@Resolver()
export class ClanBattleParamAdjustResolver {
  @Query(() => [ClanBattleParamAdjust])
  ClanBattleParamAdjust() {
    return ClanBattleParamAdjust.find();
  }
}
