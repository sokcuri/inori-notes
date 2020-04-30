import { Resolver, Query } from 'type-graphql';
import { NotifData } from '../models/NotifData';

@Resolver()
export class NotifDataResolver {
  @Query(() => [NotifData])
  NotifData() {
    return NotifData.find();
  }
}
