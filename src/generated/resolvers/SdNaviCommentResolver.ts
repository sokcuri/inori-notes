import { Resolver, Query } from 'type-graphql';
import { SdNaviComment } from '../models/SdNaviComment';

@Resolver()
export class SdNaviCommentResolver {
  @Query(() => [SdNaviComment])
  SdNaviComment() {
    return SdNaviComment.find();
  }
}
