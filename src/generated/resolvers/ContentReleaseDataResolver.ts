import { Resolver, Query } from 'type-graphql';
import { ContentReleaseData } from '../models/ContentReleaseData';

@Resolver()
export class ContentReleaseDataResolver {
  @Query(() => [ContentReleaseData])
  ContentReleaseData() {
    return ContentReleaseData.find();
  }
}
