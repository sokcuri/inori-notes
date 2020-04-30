import { Resolver, Query } from 'type-graphql';
import { OmpStoryData } from '../models/OmpStoryData';

@Resolver()
export class OmpStoryDataResolver {
  @Query(() => [OmpStoryData])
  OmpStoryData() {
    return OmpStoryData.find();
  }
}
