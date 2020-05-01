import { Resolver, Query } from 'type-graphql';
import { ClanBattleSBossData } from '../entities/ClanBattleSBossData';

@Resolver()
export class ClanBattleSBossDataResolver {
  @Query(() => [ClanBattleSBossData])
  ClanBattleSBossData() {
    return ClanBattleSBossData.find();
  }
}
