import { Resolver, Query } from 'type-graphql';
import { ClanBattleSchedule } from '../entities/ClanBattleSchedule';

@Resolver()
export class ClanBattleScheduleResolver {
  @Query(() => [ClanBattleSchedule])
  ClanBattleSchedule() {
    return ClanBattleSchedule.find();
  }
}
