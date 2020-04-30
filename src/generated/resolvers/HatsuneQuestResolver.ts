import { Resolver, Query } from 'type-graphql';
import { HatsuneQuest } from '../models/HatsuneQuest';

@Resolver()
export class HatsuneQuestResolver {
  @Query(() => [HatsuneQuest])
  HatsuneQuest() {
    return HatsuneQuest.find();
  }
}
