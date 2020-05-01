import { Resolver, Query } from 'type-graphql';
import { TowerStoryData } from '../entities/TowerStoryData';

@Resolver()
export class TowerStoryDataResolver {
  @Query(() => [TowerStoryData])
  TowerStoryData() {
    return TowerStoryData.find();
  }
}
