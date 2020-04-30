import { Resolver, Query } from 'type-graphql';
import { TowerQuestFixRewardGroup } from '../models/TowerQuestFixRewardGroup';

@Resolver()
export class TowerQuestFixRewardGroupResolver {
  @Query(() => [TowerQuestFixRewardGroup])
  TowerQuestFixRewardGroup() {
    return TowerQuestFixRewardGroup.find();
  }
}
