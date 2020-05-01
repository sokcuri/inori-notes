import { Resolver, Query } from 'type-graphql';
import { ClanBattleTotalRank } from '../entities/ClanBattleTotalRank';

@Resolver()
export class ClanBattleTotalRankResolver {
  @Query(() => [ClanBattleTotalRank])
  ClanBattleTotalRank() {
    return ClanBattleTotalRank.find();
  }
}
