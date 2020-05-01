import { Resolver, Query } from 'type-graphql';
import { EventIntroduction } from '../entities/EventIntroduction';

@Resolver()
export class EventIntroductionResolver {
  @Query(() => [EventIntroduction])
  EventIntroduction() {
    return EventIntroduction.find();
  }
}
