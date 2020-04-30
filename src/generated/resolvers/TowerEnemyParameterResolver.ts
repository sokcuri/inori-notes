import { Resolver, Query } from 'type-graphql';
import { TowerEnemyParameter } from '../models/TowerEnemyParameter';

@Resolver()
export class TowerEnemyParameterResolver {
  @Query(() => [TowerEnemyParameter])
  TowerEnemyParameter() {
    return TowerEnemyParameter.find();
  }
}
