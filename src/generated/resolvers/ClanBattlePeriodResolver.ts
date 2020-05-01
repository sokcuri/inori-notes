import { Resolver, Query } from 'type-graphql';
import { ClanBattlePeriod } from '../entities/ClanBattlePeriod';

@Resolver()
export class ClanBattlePeriodResolver {
  @Query(() => [ClanBattlePeriod])
  ClanBattlePeriod() {
    return ClanBattlePeriod.find();
  }
}
