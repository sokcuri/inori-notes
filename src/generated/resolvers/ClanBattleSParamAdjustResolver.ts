import { Resolver, Query } from 'type-graphql';
import { ClanBattleSParamAdjust } from '../models/ClanBattleSParamAdjust';

@Resolver()
export class ClanBattleSParamAdjustResolver {
  @Query(() => [ClanBattleSParamAdjust])
  ClanBattleSParamAdjust() {
    return ClanBattleSParamAdjust.find();
  }
}
