import { Resolver, Query } from 'type-graphql';
import { ClanBattleBattleMissionData } from '../models/ClanBattleBattleMissionData';

@Resolver()
export class ClanBattleBattleMissionDataResolver {
  @Query(() => [ClanBattleBattleMissionData])
  ClanBattleBattleMissionData() {
    return ClanBattleBattleMissionData.find();
  }
}
