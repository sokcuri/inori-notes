import { Resolver, Query } from 'type-graphql';
import { HatsuneItem } from '../entities/HatsuneItem';

@Resolver()
export class HatsuneItemResolver {
  @Query(() => [HatsuneItem])
  HatsuneItem() {
    return HatsuneItem.find();
  }
}
