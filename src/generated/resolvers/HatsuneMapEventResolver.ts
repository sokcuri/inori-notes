import { Resolver, Query } from 'type-graphql';
import { HatsuneMapEvent } from '../models/HatsuneMapEvent';

@Resolver()
export class HatsuneMapEventResolver {
  @Query(() => [HatsuneMapEvent])
  HatsuneMapEvent() {
    return HatsuneMapEvent.find();
  }
}
