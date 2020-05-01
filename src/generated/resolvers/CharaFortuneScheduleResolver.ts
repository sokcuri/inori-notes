import { Resolver, Query } from 'type-graphql';
import { CharaFortuneSchedule } from '../entities/CharaFortuneSchedule';

@Resolver()
export class CharaFortuneScheduleResolver {
  @Query(() => [CharaFortuneSchedule])
  CharaFortuneSchedule() {
    return CharaFortuneSchedule.find();
  }
}
