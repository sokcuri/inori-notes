import { Resolver, Query } from 'type-graphql';
import { ClanBattleOddsData } from '../models/ClanBattleOddsData';

@Resolver()
export class ClanBattleOddsDataResolver {
  @Query(() => [ClanBattleOddsData])
  ClanBattleOddsData() {
    return ClanBattleOddsData.find();
  }
}
