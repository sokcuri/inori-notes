import { Resolver, Query } from 'type-graphql';
import { RoomChatScenario } from '../models/RoomChatScenario';

@Resolver()
export class RoomChatScenarioResolver {
  @Query(() => [RoomChatScenario])
  RoomChatScenario() {
    return RoomChatScenario.find();
  }
}
