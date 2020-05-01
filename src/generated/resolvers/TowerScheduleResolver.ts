import { Resolver, Query } from 'type-graphql';
import { TowerSchedule } from '../entities/TowerSchedule';

@Resolver()
export class TowerScheduleResolver {
  @Query(() => [TowerSchedule])
  TowerSchedule() {
    return TowerSchedule.find();
  }
}
