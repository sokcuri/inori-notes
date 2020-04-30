import { Resolver, Query } from 'type-graphql';
import { EventIntroduction } from '../models/EventIntroduction';

@Resolver()
export class EventIntroductionResolver {
  @Query(() => [EventIntroduction])
  EventIntroduction() {
    return EventIntroduction.find();
  }
}
