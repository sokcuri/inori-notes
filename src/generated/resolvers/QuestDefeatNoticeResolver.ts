import { Resolver, Query } from 'type-graphql';
import { QuestDefeatNotice } from '../models/QuestDefeatNotice';

@Resolver()
export class QuestDefeatNoticeResolver {
  @Query(() => [QuestDefeatNotice])
  QuestDefeatNotice() {
    return QuestDefeatNotice.find();
  }
}
