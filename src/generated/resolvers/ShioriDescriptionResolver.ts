import { Resolver, Query } from 'type-graphql';
import { ShioriDescription } from '../models/ShioriDescription';

@Resolver()
export class ShioriDescriptionResolver {
  @Query(() => [ShioriDescription])
  ShioriDescription() {
    return ShioriDescription.find();
  }
}
