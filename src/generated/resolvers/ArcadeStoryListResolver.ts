import { Resolver, Query } from 'type-graphql';
import { ArcadeStoryList } from '../entities/ArcadeStoryList';

@Resolver()
export class ArcadeStoryListResolver {
  @Query(() => [ArcadeStoryList])
  ArcadeStoryList() {
    return ArcadeStoryList.find();
  }
}
