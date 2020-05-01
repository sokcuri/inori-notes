import { Resolver, Query } from 'type-graphql';
import { TowerQuestFixRewardGroup } from '../entities/TowerQuestFixRewardGroup';

@Resolver()
export class TowerQuestFixRewardGroupResolver {
  @Query(() => [TowerQuestFixRewardGroup])
  TowerQuestFixRewardGroup() {
    return TowerQuestFixRewardGroup.find();
  }
}
