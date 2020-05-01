import { Resolver, Query } from 'type-graphql';
import { ContentReleaseData } from '../entities/ContentReleaseData';

@Resolver()
export class ContentReleaseDataResolver {
  @Query(() => [ContentReleaseData])
  ContentReleaseData() {
    return ContentReleaseData.find();
  }
}
