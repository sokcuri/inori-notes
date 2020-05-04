import { Resolver, Query } from 'type-graphql';
import { QuestAreaData } from '../entities/QuestAreaData';

@Resolver()
export class QuestAreaDataResolver {
  @Query(() => [QuestAreaData])
  QuestAreaData() {
    return QuestAreaData.find();
  }
}
