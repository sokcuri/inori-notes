import { Resolver, Query } from 'type-graphql';
import { NyxStoryData } from '../models/NyxStoryData';

@Resolver()
export class NyxStoryDataResolver {
  @Query(() => [NyxStoryData])
  NyxStoryData() {
    return NyxStoryData.find();
  }
}
