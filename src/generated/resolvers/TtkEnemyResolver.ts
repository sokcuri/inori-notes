import { Resolver, Query } from 'type-graphql';
import { TtkEnemy } from '../models/TtkEnemy';

@Resolver()
export class TtkEnemyResolver {
  @Query(() => [TtkEnemy])
  TtkEnemy() {
    return TtkEnemy.find();
  }
}
