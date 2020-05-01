import { Resolver, Query } from 'type-graphql';
import { ContentMapData } from '../entities/ContentMapData';

@Resolver()
export class ContentMapDataResolver {
  @Query(() => [ContentMapData])
  ContentMapData() {
    return ContentMapData.find();
  }
}
