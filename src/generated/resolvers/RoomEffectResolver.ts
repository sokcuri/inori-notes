import { Resolver, Query } from 'type-graphql';
import { RoomEffect } from '../entities/RoomEffect';

@Resolver()
export class RoomEffectResolver {
  @Query(() => [RoomEffect])
  RoomEffect() {
    return RoomEffect.find();
  }
}
