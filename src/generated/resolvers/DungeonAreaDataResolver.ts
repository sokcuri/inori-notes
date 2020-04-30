import { Resolver, Query } from 'type-graphql';
import { DungeonAreaData } from '../models/DungeonAreaData';

@Resolver()
export class DungeonAreaDataResolver {
  @Query(() => [DungeonAreaData])
  DungeonAreaData() {
    return DungeonAreaData.find();
  }
}
