import { Resolver, Query } from 'type-graphql';
import { ClanBattlePeriod } from '../models/ClanBattlePeriod';

@Resolver()
export class ClanBattlePeriodResolver {
  @Query(() => [ClanBattlePeriod])
  ClanBattlePeriod() {
    return ClanBattlePeriod.find();
  }
}
