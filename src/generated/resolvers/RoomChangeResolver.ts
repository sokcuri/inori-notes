import { Resolver, Query } from 'type-graphql';
import { RoomChange } from '../entities/RoomChange';

@Resolver()
export class RoomChangeResolver {
  @Query(() => [RoomChange])
  RoomChange() {
    return RoomChange.find();
  }
}
