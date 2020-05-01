import { Resolver, Query } from 'type-graphql';
import { ClanBattleOddsData } from '../entities/ClanBattleOddsData';

@Resolver()
export class ClanBattleOddsDataResolver {
  @Query(() => [ClanBattleOddsData])
  ClanBattleOddsData() {
    return ClanBattleOddsData.find();
  }
}
