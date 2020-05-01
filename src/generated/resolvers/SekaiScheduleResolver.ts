import { Resolver, Query } from 'type-graphql';
import { SekaiSchedule } from '../entities/SekaiSchedule';

@Resolver()
export class SekaiScheduleResolver {
  @Query(() => [SekaiSchedule])
  SekaiSchedule() {
    return SekaiSchedule.find();
  }
}
