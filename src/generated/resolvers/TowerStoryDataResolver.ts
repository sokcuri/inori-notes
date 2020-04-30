import { Resolver, Query } from 'type-graphql';
import { TowerStoryData } from '../models/TowerStoryData';

@Resolver()
export class TowerStoryDataResolver {
  @Query(() => [TowerStoryData])
  TowerStoryData() {
    return TowerStoryData.find();
  }
}
