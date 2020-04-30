import { Resolver, Query } from 'type-graphql';
import { ClanBattle2MapData } from '../models/ClanBattle2MapData';

@Resolver()
export class ClanBattle2MapDataResolver {
  @Query(() => [ClanBattle2MapData])
  ClanBattle2MapData() {
    return ClanBattle2MapData.find();
  }
}
