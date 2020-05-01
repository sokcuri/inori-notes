import { Resolver, Query } from 'type-graphql';
import { ShioriItem } from '../entities/ShioriItem';

@Resolver()
export class ShioriItemResolver {
  @Query(() => [ShioriItem])
  ShioriItem() {
    return ShioriItem.find();
  }
}
