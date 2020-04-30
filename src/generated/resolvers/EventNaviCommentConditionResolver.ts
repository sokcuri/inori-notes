import { Resolver, Query } from 'type-graphql';
import { EventNaviCommentCondition } from '../models/EventNaviCommentCondition';

@Resolver()
export class EventNaviCommentConditionResolver {
  @Query(() => [EventNaviCommentCondition])
  EventNaviCommentCondition() {
    return EventNaviCommentCondition.find();
  }
}
