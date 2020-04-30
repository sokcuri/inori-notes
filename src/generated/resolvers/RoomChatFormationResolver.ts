import { Resolver, Query } from 'type-graphql';
import { RoomChatFormation } from '../models/RoomChatFormation';

@Resolver()
export class RoomChatFormationResolver {
  @Query(() => [RoomChatFormation])
  RoomChatFormation() {
    return RoomChatFormation.find();
  }
}
