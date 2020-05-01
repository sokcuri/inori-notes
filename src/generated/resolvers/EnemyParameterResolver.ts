import { Resolver, Query } from 'type-graphql';
import { EnemyParameter } from '../entities/EnemyParameter';

@Resolver()
export class EnemyParameterResolver {
  @Query(() => [EnemyParameter])
  EnemyParameter() {
    return EnemyParameter.find();
  }
}
