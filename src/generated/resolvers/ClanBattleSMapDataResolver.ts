import { Resolver, Query } from 'type-graphql';
import { ClanBattleSMapData } from '../models/ClanBattleSMapData';

@Resolver()
export class ClanBattleSMapDataResolver {
  @Query(() => [ClanBattleSMapData])
  ClanBattleSMapData() {
    return ClanBattleSMapData.find();
  }
}
