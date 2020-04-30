import { Resolver, Query } from 'type-graphql';
import { TowerExQuestData } from '../models/TowerExQuestData';

@Resolver()
export class TowerExQuestDataResolver {
  @Query(() => [TowerExQuestData])
  TowerExQuestData() {
    return TowerExQuestData.find();
  }
}
