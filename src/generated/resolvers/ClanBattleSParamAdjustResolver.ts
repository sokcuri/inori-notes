import { Resolver, Query } from 'type-graphql';
import { ClanBattleSParamAdjust } from '../entities/ClanBattleSParamAdjust';

@Resolver()
export class ClanBattleSParamAdjustResolver {
  @Query(() => [ClanBattleSParamAdjust])
  ClanBattleSParamAdjust() {
    return ClanBattleSParamAdjust.find();
  }
}
