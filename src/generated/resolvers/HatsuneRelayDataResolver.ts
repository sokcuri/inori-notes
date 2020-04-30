import { Resolver, Query } from 'type-graphql';
import { HatsuneRelayData } from '../models/HatsuneRelayData';

@Resolver()
export class HatsuneRelayDataResolver {
  @Query(() => [HatsuneRelayData])
  HatsuneRelayData() {
    return HatsuneRelayData.find();
  }
}
