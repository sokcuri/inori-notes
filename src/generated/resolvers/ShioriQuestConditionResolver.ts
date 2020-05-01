import { Resolver, Query } from 'type-graphql';
import { ShioriQuestCondition } from '../entities/ShioriQuestCondition';

@Resolver()
export class ShioriQuestConditionResolver {
  @Query(() => [ShioriQuestCondition])
  ShioriQuestCondition() {
    return ShioriQuestCondition.find();
  }
}
