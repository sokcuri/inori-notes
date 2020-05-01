import { Resolver, Query } from 'type-graphql';
import { EventBossTreasureBox } from '../entities/EventBossTreasureBox';

@Resolver()
export class EventBossTreasureBoxResolver {
  @Query(() => [EventBossTreasureBox])
  EventBossTreasureBox() {
    return EventBossTreasureBox.find();
  }
}
