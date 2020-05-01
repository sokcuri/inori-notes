import { Resolver, Query } from 'type-graphql';
import { SpaceSchedule } from '../entities/SpaceSchedule';

@Resolver()
export class SpaceScheduleResolver {
  @Query(() => [SpaceSchedule])
  SpaceSchedule() {
    return SpaceSchedule.find();
  }
}
