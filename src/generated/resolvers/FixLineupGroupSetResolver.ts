import { Resolver, Query } from 'type-graphql';
import { FixLineupGroupSet } from '../models/FixLineupGroupSet';

@Resolver()
export class FixLineupGroupSetResolver {
  @Query(() => [FixLineupGroupSet])
  FixLineupGroupSet() {
    return FixLineupGroupSet.find();
  }
}
