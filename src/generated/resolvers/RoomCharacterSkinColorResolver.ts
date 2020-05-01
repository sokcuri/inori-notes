import { Resolver, Query } from 'type-graphql';
import { RoomCharacterSkinColor } from '../entities/RoomCharacterSkinColor';

@Resolver()
export class RoomCharacterSkinColorResolver {
  @Query(() => [RoomCharacterSkinColor])
  RoomCharacterSkinColor() {
    return RoomCharacterSkinColor.find();
  }
}
