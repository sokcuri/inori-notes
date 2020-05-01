import { Resolver, Query } from 'type-graphql';
import { TrainingQuestData } from '../entities/TrainingQuestData';

@Resolver()
export class TrainingQuestDataResolver {
  @Query(() => [TrainingQuestData])
  TrainingQuestData() {
    return TrainingQuestData.find();
  }
}
