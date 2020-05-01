import { Resolver, Query } from 'type-graphql';
import { TtkNaviComment } from '../entities/TtkNaviComment';

@Resolver()
export class TtkNaviCommentResolver {
  @Query(() => [TtkNaviComment])
  TtkNaviComment() {
    return TtkNaviComment.find();
  }
}
