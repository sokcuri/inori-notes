import { Resolver, Query } from 'type-graphql';
import { RoomCharacterSkinColor } from '../models/RoomCharacterSkinColor';

@Resolver()
export class RoomCharacterSkinColorResolver {
  @Query(() => [RoomCharacterSkinColor])
  RoomCharacterSkinColor() {
    return RoomCharacterSkinColor.find();
  }
}
