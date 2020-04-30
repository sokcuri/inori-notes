import { Resolver, Query } from 'type-graphql';
import { StoryData } from '../models/StoryData';

@Resolver()
export class StoryDataResolver {
  @Query(() => [StoryData])
  StoryData() {
    return StoryData.find();
  }
}
