import { Resolver, Query } from 'type-graphql';
import { HatsuneQuizCondition } from '../models/HatsuneQuizCondition';

@Resolver()
export class HatsuneQuizConditionResolver {
  @Query(() => [HatsuneQuizCondition])
  HatsuneQuizCondition() {
    return HatsuneQuizCondition.find();
  }
}
