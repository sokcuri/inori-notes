import { Resolver, Query } from 'type-graphql';
import { ShioriItem } from '../models/ShioriItem';

@Resolver()
export class ShioriItemResolver {
  @Query(() => [ShioriItem])
  ShioriItem() {
    return ShioriItem.find();
  }
}
