import { Resolver, Query } from 'type-graphql';
import { TowerSchedule } from '../models/TowerSchedule';

@Resolver()
export class TowerScheduleResolver {
  @Query(() => [TowerSchedule])
  TowerSchedule() {
    return TowerSchedule.find();
  }
}
