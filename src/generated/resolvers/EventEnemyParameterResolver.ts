import { Resolver, Query } from 'type-graphql';
import { EventEnemyParameter } from '../models/EventEnemyParameter';

@Resolver()
export class EventEnemyParameterResolver {
  @Query(() => [EventEnemyParameter])
  EventEnemyParameter() {
    return EventEnemyParameter.find();
  }
}
