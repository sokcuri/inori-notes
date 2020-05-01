import { Resolver, Query } from 'type-graphql';
import { RoomItem } from '../entities/RoomItem';

@Resolver()
export class RoomItemResolver {
  @Query(() => [RoomItem])
  RoomItem() {
    return RoomItem.find();
  }
}
