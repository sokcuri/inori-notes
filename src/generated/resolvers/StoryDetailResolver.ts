import { Resolver, Query } from 'type-graphql';
import { StoryDetail } from '../entities/StoryDetail';

@Resolver()
export class StoryDetailResolver {
  @Query(() => [StoryDetail])
  StoryDetail() {
    return StoryDetail.find();
  }
}
