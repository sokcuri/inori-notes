import { Resolver, Query } from 'type-graphql';
import { PctResult } from '../entities/PctResult';

@Resolver()
export class PctResultResolver {
  @Query(() => [PctResult])
  PctResult() {
    return PctResult.find();
  }
}
