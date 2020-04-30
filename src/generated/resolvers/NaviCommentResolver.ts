import { Resolver, Query } from 'type-graphql';
import { NaviComment } from '../models/NaviComment';

@Resolver()
export class NaviCommentResolver {
  @Query(() => [NaviComment])
  NaviComment() {
    return NaviComment.find();
  }
}
