import { Resolver, Query } from 'type-graphql';
import { EventEnemyRewardGroup } from '../models/EventEnemyRewardGroup';

@Resolver()
export class EventEnemyRewardGroupResolver {
  @Query(() => [EventEnemyRewardGroup])
  EventEnemyRewardGroup() {
    return EventEnemyRewardGroup.find();
  }
}
