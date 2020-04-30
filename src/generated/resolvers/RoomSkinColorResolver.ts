import { Resolver, Query } from 'type-graphql';
import { RoomSkinColor } from '../models/RoomSkinColor';

@Resolver()
export class RoomSkinColorResolver {
  @Query(() => [RoomSkinColor])
  RoomSkinColor() {
    return RoomSkinColor.find();
  }
}
