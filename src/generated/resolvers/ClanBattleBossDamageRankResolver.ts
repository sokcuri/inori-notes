import { Resolver, Query } from 'type-graphql';
import { ClanBattleBossDamageRank } from '../entities/ClanBattleBossDamageRank';

@Resolver()
export class ClanBattleBossDamageRankResolver {
  @Query(() => [ClanBattleBossDamageRank])
  ClanBattleBossDamageRank() {
    return ClanBattleBossDamageRank.find();
  }
}
