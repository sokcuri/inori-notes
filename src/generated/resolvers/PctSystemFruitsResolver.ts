import { Resolver, Query } from 'type-graphql';
import { PctSystemFruits } from '../entities/PctSystemFruits';

@Resolver()
export class PctSystemFruitsResolver {
  @Query(() => [PctSystemFruits])
  PctSystemFruits() {
    return PctSystemFruits.find();
  }
}
