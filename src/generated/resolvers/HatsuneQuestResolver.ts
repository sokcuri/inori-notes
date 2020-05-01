import { Resolver, Query } from 'type-graphql';
import { HatsuneQuest } from '../entities/HatsuneQuest';

@Resolver()
export class HatsuneQuestResolver {
  @Query(() => [HatsuneQuest])
  HatsuneQuest() {
    return HatsuneQuest.find();
  }
}
