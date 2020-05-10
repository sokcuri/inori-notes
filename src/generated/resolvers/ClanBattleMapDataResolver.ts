import { Resolver, Query } from 'type-graphql';
import { ClanBattleMapData } from '../entities/ClanBattleMapData';

@Resolver()
export class ClanBattleMapDataResolver {
  @Query(() => [ClanBattleMapData])
  ClanBattleMapData() {
    return ClanBattleMapData.find();
  }
}
