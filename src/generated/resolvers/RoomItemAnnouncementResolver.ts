import { Resolver, Query } from 'type-graphql';
import { RoomItemAnnouncement } from '../models/RoomItemAnnouncement';

@Resolver()
export class RoomItemAnnouncementResolver {
  @Query(() => [RoomItemAnnouncement])
  RoomItemAnnouncement() {
    return RoomItemAnnouncement.find();
  }
}
