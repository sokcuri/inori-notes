import { Resolver, Query } from 'type-graphql';
import { RoomChange } from '../models/RoomChange';

@Resolver()
export class RoomChangeResolver {
  @Query(() => [RoomChange])
  RoomChange() {
    return RoomChange.find();
  }
}
