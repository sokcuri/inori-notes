import { Resolver, Query } from 'type-graphql';
import { TowerAreaData } from '../models/TowerAreaData';

@Resolver()
export class TowerAreaDataResolver {
  @Query(() => [TowerAreaData])
  TowerAreaData() {
    return TowerAreaData.find();
  }
}
