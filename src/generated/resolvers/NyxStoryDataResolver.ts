import { Resolver, Query } from 'type-graphql';
import { NyxStoryData } from '../entities/NyxStoryData';

@Resolver()
export class NyxStoryDataResolver {
  @Query(() => [NyxStoryData])
  NyxStoryData() {
    return NyxStoryData.find();
  }
}
