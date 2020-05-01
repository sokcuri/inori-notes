import { Resolver, Query } from 'type-graphql';
import { TowerCloisterQuestData } from '../entities/TowerCloisterQuestData';

@Resolver()
export class TowerCloisterQuestDataResolver {
  @Query(() => [TowerCloisterQuestData])
  TowerCloisterQuestData() {
    return TowerCloisterQuestData.find();
  }
}
