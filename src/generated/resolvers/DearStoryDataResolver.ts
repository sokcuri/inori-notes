import { Resolver, Query } from 'type-graphql';
import { DearStoryData } from '../models/DearStoryData';

@Resolver()
export class DearStoryDataResolver {
  @Query(() => [DearStoryData])
  DearStoryData() {
    return DearStoryData.find();
  }
}
