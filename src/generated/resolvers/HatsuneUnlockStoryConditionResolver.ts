import { Resolver, Query } from 'type-graphql';
import { HatsuneUnlockStoryCondition } from '../models/HatsuneUnlockStoryCondition';

@Resolver()
export class HatsuneUnlockStoryConditionResolver {
  @Query(() => [HatsuneUnlockStoryCondition])
  HatsuneUnlockStoryCondition() {
    return HatsuneUnlockStoryCondition.find();
  }
}
