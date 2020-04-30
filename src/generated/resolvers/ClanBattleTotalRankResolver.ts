import { Resolver, Query } from 'type-graphql';
import { ClanBattleTotalRank } from '../models/ClanBattleTotalRank';

@Resolver()
export class ClanBattleTotalRankResolver {
  @Query(() => [ClanBattleTotalRank])
  ClanBattleTotalRank() {
    return ClanBattleTotalRank.find();
  }
}
