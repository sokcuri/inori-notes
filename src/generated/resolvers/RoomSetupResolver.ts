import { Resolver, Query } from 'type-graphql';
import { RoomSetup } from '../entities/RoomSetup';

@Resolver()
export class RoomSetupResolver {
  @Query(() => [RoomSetup])
  RoomSetup() {
    return RoomSetup.find();
  }
}
