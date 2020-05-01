import { Resolver, Query } from 'type-graphql';
import { ShioriEventList } from '../entities/ShioriEventList';

@Resolver()
export class ShioriEventListResolver {
  @Query(() => [ShioriEventList])
  ShioriEventList() {
    return ShioriEventList.find();
  }
}
