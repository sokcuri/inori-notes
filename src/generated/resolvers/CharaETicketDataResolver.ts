import { Resolver, Query } from 'type-graphql';
import { CharaETicketData } from '../entities/CharaETicketData';

@Resolver()
export class CharaETicketDataResolver {
  @Query(() => [CharaETicketData])
  CharaETicketData() {
    return CharaETicketData.find();
  }
}
