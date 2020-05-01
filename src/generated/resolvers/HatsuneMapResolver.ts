import { Resolver, Query } from 'type-graphql';
import { HatsuneMap } from '../entities/HatsuneMap';

@Resolver()
export class HatsuneMapResolver {
  @Query(() => [HatsuneMap])
  HatsuneMap() {
    return HatsuneMap.find();
  }
}
