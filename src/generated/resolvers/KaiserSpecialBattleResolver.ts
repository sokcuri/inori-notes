import { Resolver, Query } from 'type-graphql';
import { KaiserSpecialBattle } from '../entities/KaiserSpecialBattle';

@Resolver()
export class KaiserSpecialBattleResolver {
  @Query(() => [KaiserSpecialBattle])
  KaiserSpecialBattle() {
    return KaiserSpecialBattle.find();
  }
}
