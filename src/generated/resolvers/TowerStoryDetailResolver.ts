import { Resolver, Query } from 'type-graphql';
import { TowerStoryDetail } from '../models/TowerStoryDetail';

@Resolver()
export class TowerStoryDetailResolver {
  @Query(() => [TowerStoryDetail])
  TowerStoryDetail() {
    return TowerStoryDetail.find();
  }
}
