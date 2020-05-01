import { Resolver, Query } from 'type-graphql';
import { TowerEnemyParameter } from '../entities/TowerEnemyParameter';

@Resolver()
export class TowerEnemyParameterResolver {
  @Query(() => [TowerEnemyParameter])
  TowerEnemyParameter() {
    return TowerEnemyParameter.find();
  }
}
