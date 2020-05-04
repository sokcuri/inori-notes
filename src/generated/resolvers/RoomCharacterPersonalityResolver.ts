import { Resolver, Query } from 'type-graphql';
import { RoomCharacterPersonality } from '../models/RoomCharacterPersonality';

@Resolver()
export class RoomCharacterPersonalityResolver {
  @Query(() => [RoomCharacterPersonality])
  RoomCharacterPersonality() {
    return RoomCharacterPersonality.find();
  }
}
