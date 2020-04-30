import { Resolver, Query } from 'type-graphql';
import { QuestRewardData } from '../models/QuestRewardData';

@Resolver()
export class QuestRewardDataResolver {
  @Query(() => [QuestRewardData])
  QuestRewardData() {
    return QuestRewardData.find();
  }
}
