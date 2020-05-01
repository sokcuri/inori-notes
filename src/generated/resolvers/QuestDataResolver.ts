import { Resolver, Query } from 'type-graphql';
import { QuestData } from '../entities/QuestData';

@Resolver()
export class QuestDataResolver {
  @Query(() => [QuestData])
  QuestData() {
    return QuestData.find();
  }
}
