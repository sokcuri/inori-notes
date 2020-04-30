import { Resolver, Query } from 'type-graphql';
import { RoomReleaseData } from '../models/RoomReleaseData';

@Resolver()
export class RoomReleaseDataResolver {
  @Query(() => [RoomReleaseData])
  RoomReleaseData() {
    return RoomReleaseData.find();
  }
}
