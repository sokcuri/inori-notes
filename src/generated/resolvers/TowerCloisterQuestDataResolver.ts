import { Resolver, Query } from 'type-graphql';
import { TowerCloisterQuestData } from '../models/TowerCloisterQuestData';

@Resolver()
export class TowerCloisterQuestDataResolver {
  @Query(() => [TowerCloisterQuestData])
  TowerCloisterQuestData() {
    return TowerCloisterQuestData.find();
  }
}
