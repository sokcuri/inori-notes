import { Resolver, Query } from 'type-graphql';
import { GiftMessage } from '../models/GiftMessage';

@Resolver()
export class GiftMessageResolver {
  @Query(() => [GiftMessage])
  GiftMessage() {
    return GiftMessage.find();
  }
}
