import { Resolver, Query } from 'type-graphql';
import { QuestAreaData } from '../models/QuestAreaData';

@Resolver()
export class QuestAreaDataResolver {
  @Query(() => [QuestAreaData])
  QuestAreaData() {
    return QuestAreaData.find();
  }
}
