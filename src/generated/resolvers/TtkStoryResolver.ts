import { Resolver, Query } from 'type-graphql';
import { TtkStory } from '../entities/TtkStory';

@Resolver()
export class TtkStoryResolver {
  @Query(() => [TtkStory])
  TtkStory() {
    return TtkStory.find();
  }
}
