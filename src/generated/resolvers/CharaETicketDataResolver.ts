import { Resolver, Query } from 'type-graphql';
import { CharaETicketData } from '../models/CharaETicketData';

@Resolver()
export class CharaETicketDataResolver {
  @Query(() => [CharaETicketData])
  CharaETicketData() {
    return CharaETicketData.find();
  }
}
