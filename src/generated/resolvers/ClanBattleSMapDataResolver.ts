import { Resolver, Query } from 'type-graphql';
import { ClanBattleSMapData } from '../entities/ClanBattleSMapData';

@Resolver()
export class ClanBattleSMapDataResolver {
  @Query(() => [ClanBattleSMapData])
  ClanBattleSMapData() {
    return ClanBattleSMapData.find();
  }
}
