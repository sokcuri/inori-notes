import { Resolver, Query } from 'type-graphql';
import { QuestRewardData } from '../entities/QuestRewardData';

@Resolver()
export class QuestRewardDataResolver {
  @Query(() => [QuestRewardData])
  QuestRewardData() {
    return QuestRewardData.find();
  }
}
