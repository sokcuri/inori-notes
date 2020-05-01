import { Resolver, Query } from 'type-graphql';
import { GachaExchangeLineup } from '../entities/GachaExchangeLineup';

@Resolver()
export class GachaExchangeLineupResolver {
  @Query(() => [GachaExchangeLineup])
  GachaExchangeLineup() {
    return GachaExchangeLineup.find();
  }
}
