import { Resolver, Query } from 'type-graphql';
import { ShioriDescription } from '../entities/ShioriDescription';

@Resolver()
export class ShioriDescriptionResolver {
  @Query(() => [ShioriDescription])
  ShioriDescription() {
    return ShioriDescription.find();
  }
}
