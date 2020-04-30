import { Resolver, Query } from 'type-graphql';
import { DungeonQuestData } from '../models/DungeonQuestData';

@Resolver()
export class DungeonQuestDataResolver {
  @Query(() => [DungeonQuestData])
  DungeonQuestData() {
    return DungeonQuestData.find();
  }
}
