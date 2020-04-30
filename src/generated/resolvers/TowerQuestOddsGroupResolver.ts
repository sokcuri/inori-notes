import { Resolver, Query } from 'type-graphql';
import { TowerQuestOddsGroup } from '../models/TowerQuestOddsGroup';

@Resolver()
export class TowerQuestOddsGroupResolver {
  @Query(() => [TowerQuestOddsGroup])
  TowerQuestOddsGroup() {
    return TowerQuestOddsGroup.find();
  }
}
