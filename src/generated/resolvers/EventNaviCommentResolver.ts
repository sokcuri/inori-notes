import { Resolver, Query } from 'type-graphql';
import { EventNaviComment } from '../models/EventNaviComment';

@Resolver()
export class EventNaviCommentResolver {
  @Query(() => [EventNaviComment])
  EventNaviComment() {
    return EventNaviComment.find();
  }
}
