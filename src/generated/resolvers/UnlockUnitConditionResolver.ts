import { Resolver, Query } from 'type-graphql';
import { UnlockUnitCondition } from '../models/UnlockUnitCondition';

@Resolver()
export class UnlockUnitConditionResolver {
  @Query(() => [UnlockUnitCondition])
  UnlockUnitCondition() {
    return UnlockUnitCondition.find();
  }
}
