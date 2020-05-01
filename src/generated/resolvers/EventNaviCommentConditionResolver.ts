import { Resolver, Query } from 'type-graphql';
import { EventNaviCommentCondition } from '../entities/EventNaviCommentCondition';

@Resolver()
export class EventNaviCommentConditionResolver {
  @Query(() => [EventNaviCommentCondition])
  EventNaviCommentCondition() {
    return EventNaviCommentCondition.find();
  }
}
