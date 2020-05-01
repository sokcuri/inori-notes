import { Resolver, Query } from 'type-graphql';
import { HatsuneSchedule } from '../entities/HatsuneSchedule';

@Resolver()
export class HatsuneScheduleResolver {
  @Query(() => [HatsuneSchedule])
  HatsuneSchedule() {
    return HatsuneSchedule.find();
  }
}
