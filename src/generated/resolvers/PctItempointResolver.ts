import { Resolver, Query } from 'type-graphql';
import { PctItempoint } from '../models/PctItempoint';

@Resolver()
export class PctItempointResolver {
  @Query(() => [PctItempoint])
  PctItempoint() {
    return PctItempoint.find();
  }
}
