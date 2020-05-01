import { Resolver, Query } from 'type-graphql';
import { TowerQuestData } from '../entities/TowerQuestData';

@Resolver()
export class TowerQuestDataResolver {
  @Query(() => [TowerQuestData])
  TowerQuestData() {
    return TowerQuestData.find();
  }
}
