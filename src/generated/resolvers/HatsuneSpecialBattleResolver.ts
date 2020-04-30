import { Resolver, Query } from 'type-graphql';
import { HatsuneSpecialBattle } from '../models/HatsuneSpecialBattle';

@Resolver()
export class HatsuneSpecialBattleResolver {
  @Query(() => [HatsuneSpecialBattle])
  HatsuneSpecialBattle() {
    return HatsuneSpecialBattle.find();
  }
}
