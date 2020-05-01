import { Resolver, Query } from 'type-graphql';
import { TicketGachaData } from '../entities/TicketGachaData';

@Resolver()
export class TicketGachaDataResolver {
  @Query(() => [TicketGachaData])
  TicketGachaData() {
    return TicketGachaData.find();
  }
}
