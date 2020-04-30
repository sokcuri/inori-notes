import { Resolver, Query } from 'type-graphql';
import { HatsuneUnlockUnitCondition } from '../models/HatsuneUnlockUnitCondition';

@Resolver()
export class HatsuneUnlockUnitConditionResolver {
  @Query(() => [HatsuneUnlockUnitCondition])
  HatsuneUnlockUnitCondition() {
    return HatsuneUnlockUnitCondition.find();
  }
}
