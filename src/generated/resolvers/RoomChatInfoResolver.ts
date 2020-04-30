import { Resolver, Query } from 'type-graphql';
import { RoomChatInfo } from '../models/RoomChatInfo';

@Resolver()
export class RoomChatInfoResolver {
  @Query(() => [RoomChatInfo])
  RoomChatInfo() {
    return RoomChatInfo.find();
  }
}
