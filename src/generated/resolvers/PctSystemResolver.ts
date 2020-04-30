import { Resolver, Query } from 'type-graphql';
import { PctSystem } from '../models/PctSystem';

@Resolver()
export class PctSystemResolver {
  @Query(() => [PctSystem])
  PctSystem() {
    return PctSystem.find();
  }
}
