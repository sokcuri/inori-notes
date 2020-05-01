import { Resolver, Query } from 'type-graphql';
import { DungeonQuestData } from '../entities/DungeonQuestData';

@Resolver()
export class DungeonQuestDataResolver {
  @Query(() => [DungeonQuestData])
  DungeonQuestData() {
    return DungeonQuestData.find();
  }
}
