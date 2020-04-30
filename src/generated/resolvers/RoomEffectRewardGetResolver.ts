import { Resolver, Query } from 'type-graphql';
import { RoomEffectRewardGet } from '../models/RoomEffectRewardGet';

@Resolver()
export class RoomEffectRewardGetResolver {
  @Query(() => [RoomEffectRewardGet])
  RoomEffectRewardGet() {
    return RoomEffectRewardGet.find();
  }
}
