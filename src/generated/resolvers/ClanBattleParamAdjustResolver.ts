import { Resolver, Query } from 'type-graphql';
import { ClanBattleParamAdjust } from '../models/ClanBattleParamAdjust';

@Resolver()
export class ClanBattleParamAdjustResolver {
  @Query(() => [ClanBattleParamAdjust])
  ClanBattleParamAdjust() {
    return ClanBattleParamAdjust.find();
  }
}
