import { Resolver, Query } from 'type-graphql';
import { KaiserSpecialBattle } from '../models/KaiserSpecialBattle';

@Resolver()
export class KaiserSpecialBattleResolver {
  @Query(() => [KaiserSpecialBattle])
  KaiserSpecialBattle() {
    return KaiserSpecialBattle.find();
  }
}
