import { Resolver, Query } from 'type-graphql';
import { TrainingQuestData } from '../models/TrainingQuestData';

@Resolver()
export class TrainingQuestDataResolver {
  @Query(() => [TrainingQuestData])
  TrainingQuestData() {
    return TrainingQuestData.find();
  }
}
