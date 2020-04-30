import { Resolver, Query } from 'type-graphql';
import { SekaiEnemyParameter } from '../models/SekaiEnemyParameter';

@Resolver()
export class SekaiEnemyParameterResolver {
  @Query(() => [SekaiEnemyParameter])
  SekaiEnemyParameter() {
    return SekaiEnemyParameter.find();
  }
}
