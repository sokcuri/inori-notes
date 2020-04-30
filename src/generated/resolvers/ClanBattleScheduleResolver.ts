import { Resolver, Query } from 'type-graphql';
import { ClanBattleSchedule } from '../models/ClanBattleSchedule';

@Resolver()
export class ClanBattleScheduleResolver {
  @Query(() => [ClanBattleSchedule])
  ClanBattleSchedule() {
    return ClanBattleSchedule.find();
  }
}
