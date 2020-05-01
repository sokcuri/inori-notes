import { Resolver, Query } from 'type-graphql';
import { SekaiUnlockStoryCondition } from '../entities/SekaiUnlockStoryCondition';

@Resolver()
export class SekaiUnlockStoryConditionResolver {
  @Query(() => [SekaiUnlockStoryCondition])
  SekaiUnlockStoryCondition() {
    return SekaiUnlockStoryCondition.find();
  }
}
