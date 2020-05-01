import { Resolver, Query } from 'type-graphql';
import { DungeonAreaData } from '../entities/DungeonAreaData';

@Resolver()
export class DungeonAreaDataResolver {
  @Query(() => [DungeonAreaData])
  DungeonAreaData() {
    return DungeonAreaData.find();
  }
}
