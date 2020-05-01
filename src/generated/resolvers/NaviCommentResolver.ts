import { Resolver, Query } from 'type-graphql';
import { NaviComment } from '../entities/NaviComment';

@Resolver()
export class NaviCommentResolver {
  @Query(() => [NaviComment])
  NaviComment() {
    return NaviComment.find();
  }
}
