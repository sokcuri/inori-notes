import { Resolver, Query } from 'type-graphql';
import { QuestConditionData } from '../entities/QuestConditionData';

@Resolver()
export class QuestConditionDataResolver {
  @Query(() => [QuestConditionData])
  QuestConditionData() {
    return QuestConditionData.find();
  }
}
