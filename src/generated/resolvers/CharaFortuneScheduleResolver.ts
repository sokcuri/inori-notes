import { Resolver, Query } from 'type-graphql';
import { CharaFortuneSchedule } from '../models/CharaFortuneSchedule';

@Resolver()
export class CharaFortuneScheduleResolver {
  @Query(() => [CharaFortuneSchedule])
  CharaFortuneSchedule() {
    return CharaFortuneSchedule.find();
  }
}
