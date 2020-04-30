import { Resolver, Query } from 'type-graphql';
import { RoomItemDetail } from '../models/RoomItemDetail';

@Resolver()
export class RoomItemDetailResolver {
  @Query(() => [RoomItemDetail])
  RoomItemDetail() {
    return RoomItemDetail.find();
  }
}
