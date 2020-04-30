import { Resolver, Query } from 'type-graphql';
import { HatsuneSpecialEnemy } from '../models/HatsuneSpecialEnemy';

@Resolver()
export class HatsuneSpecialEnemyResolver {
  @Query(() => [HatsuneSpecialEnemy])
  HatsuneSpecialEnemy() {
    return HatsuneSpecialEnemy.find();
  }
}
