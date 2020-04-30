import { Resolver, Query } from 'type-graphql';
import { ShioriEnemyParameter } from '../models/ShioriEnemyParameter';

@Resolver()
export class ShioriEnemyParameterResolver {
  @Query(() => [ShioriEnemyParameter])
  ShioriEnemyParameter() {
    return ShioriEnemyParameter.find();
  }
}
