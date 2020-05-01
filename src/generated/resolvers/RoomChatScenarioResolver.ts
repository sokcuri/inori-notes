import { Resolver, Query } from 'type-graphql';
import { RoomChatScenario } from '../entities/RoomChatScenario';

@Resolver()
export class RoomChatScenarioResolver {
  @Query(() => [RoomChatScenario])
  RoomChatScenario() {
    return RoomChatScenario.find();
  }
}
