import { Resolver, Query } from 'type-graphql';
import { ClanBattle2BossData } from '../entities/ClanBattle2BossData';

@Resolver()
export class ClanBattle2BossDataResolver {
  @Query(() => [ClanBattle2BossData])
  ClanBattle2BossData() {
    return ClanBattle2BossData.find();
  }
}
