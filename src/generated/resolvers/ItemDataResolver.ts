import { Resolver, Query } from 'type-graphql';
import { ItemData } from '../models/ItemData';

@Resolver()
export class ItemDataResolver {
  @Query(() => [ItemData])
  ItemData() {
    return ItemData.find();
  }
}
