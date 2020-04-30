import { Resolver, Query } from 'type-graphql';
import { SekaiUnlockStoryCondition } from '../models/SekaiUnlockStoryCondition';

@Resolver()
export class SekaiUnlockStoryConditionResolver {
  @Query(() => [SekaiUnlockStoryCondition])
  SekaiUnlockStoryCondition() {
    return SekaiUnlockStoryCondition.find();
  }
}
