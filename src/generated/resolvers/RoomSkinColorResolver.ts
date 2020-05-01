import { Resolver, Query } from 'type-graphql';
import { RoomSkinColor } from '../entities/RoomSkinColor';

@Resolver()
export class RoomSkinColorResolver {
  @Query(() => [RoomSkinColor])
  RoomSkinColor() {
    return RoomSkinColor.find();
  }
}
