import { Resolver, Query } from 'type-graphql';
import { HatsuneQuestCondition } from '../models/HatsuneQuestCondition';

@Resolver()
export class HatsuneQuestConditionResolver {
  @Query(() => [HatsuneQuestCondition])
  HatsuneQuestCondition() {
    return HatsuneQuestCondition.find();
  }
}
