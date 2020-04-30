import { Resolver, Query } from 'type-graphql';
import { SpaceSchedule } from '../models/SpaceSchedule';

@Resolver()
export class SpaceScheduleResolver {
  @Query(() => [SpaceSchedule])
  SpaceSchedule() {
    return SpaceSchedule.find();
  }
}
