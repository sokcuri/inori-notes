import { Resolver, Query } from 'type-graphql';
import { HatsuneRelayData } from '../entities/HatsuneRelayData';

@Resolver()
export class HatsuneRelayDataResolver {
  @Query(() => [HatsuneRelayData])
  HatsuneRelayData() {
    return HatsuneRelayData.find();
  }
}
