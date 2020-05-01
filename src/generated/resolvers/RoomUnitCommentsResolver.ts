import { Resolver, Query } from 'type-graphql';
import { RoomUnitComments } from '../entities/RoomUnitComments';

@Resolver()
export class RoomUnitCommentsResolver {
  @Query(() => [RoomUnitComments])
  RoomUnitComments() {
    return RoomUnitComments.find();
  }
}
