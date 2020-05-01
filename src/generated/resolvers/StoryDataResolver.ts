import { Resolver, Query } from 'type-graphql';
import { StoryData } from '../entities/StoryData';

@Resolver()
export class StoryDataResolver {
  @Query(() => [StoryData])
  StoryData() {
    return StoryData.find();
  }
}
