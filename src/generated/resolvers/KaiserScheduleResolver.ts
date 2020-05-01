import { Resolver, Query } from 'type-graphql';
import { KaiserSchedule } from '../entities/KaiserSchedule';

@Resolver()
export class KaiserScheduleResolver {
  @Query(() => [KaiserSchedule])
  KaiserSchedule() {
    return KaiserSchedule.find();
  }
}
