import { Resolver, Query } from 'type-graphql';
import { SekaiTopStoryData } from '../entities/SekaiTopStoryData';

@Resolver()
export class SekaiTopStoryDataResolver {
  @Query(() => [SekaiTopStoryData])
  SekaiTopStoryData() {
    return SekaiTopStoryData.find();
  }
}
