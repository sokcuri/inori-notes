import { Resolver, Query } from 'type-graphql';
import { HatsuneSpecialBattle } from '../entities/HatsuneSpecialBattle';

@Resolver()
export class HatsuneSpecialBattleResolver {
  @Query(() => [HatsuneSpecialBattle])
  HatsuneSpecialBattle() {
    return HatsuneSpecialBattle.find();
  }
}
