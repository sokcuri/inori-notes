import { Resolver, Query } from 'type-graphql';
import { StoryCharacterMask } from '../entities/StoryCharacterMask';

@Resolver()
export class StoryCharacterMaskResolver {
  @Query(() => [StoryCharacterMask])
  StoryCharacterMask() {
    return StoryCharacterMask.find();
  }
}
