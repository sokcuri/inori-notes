import { Resolver, Query } from 'type-graphql';
import { EventBossTreasureContent } from '../entities/EventBossTreasureContent';

@Resolver()
export class EventBossTreasureContentResolver {
  @Query(() => [EventBossTreasureContent])
  EventBossTreasureContent() {
    return EventBossTreasureContent.find();
  }
}
