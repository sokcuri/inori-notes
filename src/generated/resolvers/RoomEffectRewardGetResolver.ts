import { Resolver, Query } from 'type-graphql';
import { RoomEffectRewardGet } from '../entities/RoomEffectRewardGet';

@Resolver()
export class RoomEffectRewardGetResolver {
  @Query(() => [RoomEffectRewardGet])
  RoomEffectRewardGet() {
    return RoomEffectRewardGet.find();
  }
}
