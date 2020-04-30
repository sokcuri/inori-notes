import { Resolver, Query } from 'type-graphql';
import { HatsuneSpecialBossTicketCount } from '../models/HatsuneSpecialBossTicketCount';

@Resolver()
export class HatsuneSpecialBossTicketCountResolver {
  @Query(() => [HatsuneSpecialBossTicketCount])
  HatsuneSpecialBossTicketCount() {
    return HatsuneSpecialBossTicketCount.find();
  }
}
