import { Resolver, Query } from 'type-graphql';
import { KmkNaviComment } from '../models/KmkNaviComment';

@Resolver()
export class KmkNaviCommentResolver {
  @Query(() => [KmkNaviComment])
  KmkNaviComment() {
    return KmkNaviComment.find();
  }
}
