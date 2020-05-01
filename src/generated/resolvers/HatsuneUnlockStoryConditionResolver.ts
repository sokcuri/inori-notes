import { Resolver, Query } from 'type-graphql';
import { HatsuneUnlockStoryCondition } from '../entities/HatsuneUnlockStoryCondition';

@Resolver()
export class HatsuneUnlockStoryConditionResolver {
  @Query(() => [HatsuneUnlockStoryCondition])
  HatsuneUnlockStoryCondition() {
    return HatsuneUnlockStoryCondition.find();
  }
}
