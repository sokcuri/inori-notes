import { Resolver, Query } from 'type-graphql';
import { OmpStoryData } from '../entities/OmpStoryData';

@Resolver()
export class OmpStoryDataResolver {
  @Query(() => [OmpStoryData])
  OmpStoryData() {
    return OmpStoryData.find();
  }
}
