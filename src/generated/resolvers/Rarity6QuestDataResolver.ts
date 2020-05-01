import { Resolver, Query } from 'type-graphql';
import { Rarity6QuestData } from '../entities/Rarity6QuestData';

@Resolver()
export class Rarity6QuestDataResolver {
  @Query(() => [Rarity6QuestData])
  Rarity6QuestData() {
    return Rarity6QuestData.find();
  }
}
