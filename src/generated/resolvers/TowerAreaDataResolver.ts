import { Resolver, Query } from 'type-graphql';
import { TowerAreaData } from '../entities/TowerAreaData';

@Resolver()
export class TowerAreaDataResolver {
  @Query(() => [TowerAreaData])
  TowerAreaData() {
    return TowerAreaData.find();
  }
}
