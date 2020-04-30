import { Resolver, Query } from 'type-graphql';
import { HatsuneItem } from '../models/HatsuneItem';

@Resolver()
export class HatsuneItemResolver {
  @Query(() => [HatsuneItem])
  HatsuneItem() {
    return HatsuneItem.find();
  }
}
