import { Resolver, Query } from 'type-graphql';
import { CooperationQuestData } from '../models/CooperationQuestData';

@Resolver()
export class CooperationQuestDataResolver {
  @Query(() => [CooperationQuestData])
  CooperationQuestData() {
    return CooperationQuestData.find();
  }
}
