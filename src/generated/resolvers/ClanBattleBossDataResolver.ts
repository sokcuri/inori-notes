import { Resolver, Query } from 'type-graphql';
import { ClanBattleBossData } from '../entities/ClanBattleBossData';

@Resolver()
export class ClanBattleBossDataResolver {
  @Query(() => [ClanBattleBossData])
  ClanBattleBossData() {
    return ClanBattleBossData.find();
  }
}
