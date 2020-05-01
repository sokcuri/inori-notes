import { Resolver, Query } from 'type-graphql';
import { HatsunePresent } from '../entities/HatsunePresent';

@Resolver()
export class HatsunePresentResolver {
  @Query(() => [HatsunePresent])
  HatsunePresent() {
    return HatsunePresent.find();
  }
}
