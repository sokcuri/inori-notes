import { Resolver, Query } from 'type-graphql';
import { UnitEnemyData } from '../models/UnitEnemyData';

@Resolver()
export class UnitEnemyDataResolver {
  @Query(() => [UnitEnemyData])
  UnitEnemyData() {
    return UnitEnemyData.find();
  }
}
