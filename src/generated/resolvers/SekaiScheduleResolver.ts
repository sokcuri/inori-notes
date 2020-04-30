import { Resolver, Query } from 'type-graphql';
import { SekaiSchedule } from '../models/SekaiSchedule';

@Resolver()
export class SekaiScheduleResolver {
  @Query(() => [SekaiSchedule])
  SekaiSchedule() {
    return SekaiSchedule.find();
  }
}
