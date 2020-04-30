import { Resolver, Query } from 'type-graphql';
import { RoomUnitComments } from '../models/RoomUnitComments';

@Resolver()
export class RoomUnitCommentsResolver {
  @Query(() => [RoomUnitComments])
  RoomUnitComments() {
    return RoomUnitComments.find();
  }
}
