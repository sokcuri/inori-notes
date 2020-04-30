import { Resolver, Query } from 'type-graphql';
import { StoryQuestData } from '../models/StoryQuestData';

@Resolver()
export class StoryQuestDataResolver {
  @Query(() => [StoryQuestData])
  StoryQuestData() {
    return StoryQuestData.find();
  }
}
