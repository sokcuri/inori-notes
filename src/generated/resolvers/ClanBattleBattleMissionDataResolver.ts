import { Resolver, Query } from 'type-graphql';
import { ClanBattleBattleMissionData } from '../entities/ClanBattleBattleMissionData';

@Resolver()
export class ClanBattleBattleMissionDataResolver {
  @Query(() => [ClanBattleBattleMissionData])
  ClanBattleBattleMissionData() {
    return ClanBattleBattleMissionData.find();
  }
}
