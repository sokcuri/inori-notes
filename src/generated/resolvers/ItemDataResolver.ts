import { Resolver, Query } from 'type-graphql';
import { ItemData } from '../entities/ItemData';

@Resolver()
export class ItemDataResolver {
  @Query(() => [ItemData])
  ItemData() {
    return ItemData.find();
  }
}
