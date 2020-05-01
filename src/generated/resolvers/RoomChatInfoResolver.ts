import { Resolver, Query } from 'type-graphql';
import { RoomChatInfo } from '../entities/RoomChatInfo';

@Resolver()
export class RoomChatInfoResolver {
  @Query(() => [RoomChatInfo])
  RoomChatInfo() {
    return RoomChatInfo.find();
  }
}
