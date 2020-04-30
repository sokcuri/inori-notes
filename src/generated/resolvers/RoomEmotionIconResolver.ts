import { Resolver, Query } from 'type-graphql';
import { RoomEmotionIcon } from '../models/RoomEmotionIcon';

@Resolver()
export class RoomEmotionIconResolver {
  @Query(() => [RoomEmotionIcon])
  RoomEmotionIcon() {
    return RoomEmotionIcon.find();
  }
}
