import { Resolver, Query } from 'type-graphql';
import { EventEnemyRewardGroup } from '../entities/EventEnemyRewardGroup';

@Resolver()
export class EventEnemyRewardGroupResolver {
  @Query(() => [EventEnemyRewardGroup])
  EventEnemyRewardGroup() {
    return EventEnemyRewardGroup.find();
  }
}
