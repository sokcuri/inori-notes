import { Resolver, Query } from 'type-graphql';
import { QuestData } from '../models/QuestData';

@Resolver()
export class QuestDataResolver {
  @Query(() => [QuestData])
  QuestData() {
    return QuestData.find();
  }
}
