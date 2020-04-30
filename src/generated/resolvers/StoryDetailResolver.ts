import { Resolver, Query } from 'type-graphql';
import { StoryDetail } from '../models/StoryDetail';

@Resolver()
export class StoryDetailResolver {
  @Query(() => [StoryDetail])
  StoryDetail() {
    return StoryDetail.find();
  }
}
