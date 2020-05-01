import { Resolver, Query } from 'type-graphql';
import { HatsuneSpecialBossTicketCount } from '../entities/HatsuneSpecialBossTicketCount';

@Resolver()
export class HatsuneSpecialBossTicketCountResolver {
  @Query(() => [HatsuneSpecialBossTicketCount])
  HatsuneSpecialBossTicketCount() {
    return HatsuneSpecialBossTicketCount.find();
  }
}
