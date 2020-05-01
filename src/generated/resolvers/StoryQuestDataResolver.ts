import { Resolver, Query } from 'type-graphql';
import { StoryQuestData } from '../entities/StoryQuestData';

@Resolver()
export class StoryQuestDataResolver {
  @Query(() => [StoryQuestData])
  StoryQuestData() {
    return StoryQuestData.find();
  }
}
