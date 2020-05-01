import { Resolver, Query } from 'type-graphql';
import { HatsuneUnlockUnitCondition } from '../entities/HatsuneUnlockUnitCondition';

@Resolver()
export class HatsuneUnlockUnitConditionResolver {
  @Query(() => [HatsuneUnlockUnitCondition])
  HatsuneUnlockUnitCondition() {
    return HatsuneUnlockUnitCondition.find();
  }
}
