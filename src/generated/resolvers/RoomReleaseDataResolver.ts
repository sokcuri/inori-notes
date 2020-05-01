import { Resolver, Query } from 'type-graphql';
import { RoomReleaseData } from '../entities/RoomReleaseData';

@Resolver()
export class RoomReleaseDataResolver {
  @Query(() => [RoomReleaseData])
  RoomReleaseData() {
    return RoomReleaseData.find();
  }
}
