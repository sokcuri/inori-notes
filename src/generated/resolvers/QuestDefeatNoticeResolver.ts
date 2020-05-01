import { Resolver, Query } from 'type-graphql';
import { QuestDefeatNotice } from '../entities/QuestDefeatNotice';

@Resolver()
export class QuestDefeatNoticeResolver {
  @Query(() => [QuestDefeatNotice])
  QuestDefeatNotice() {
    return QuestDefeatNotice.find();
  }
}
