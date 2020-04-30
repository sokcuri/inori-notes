import { Resolver, Query } from 'type-graphql';
import { UnitComments } from '../models/UnitComments';

@Resolver()
export class UnitCommentsResolver {
  @Query(() => [UnitComments])
  UnitComments() {
    return UnitComments.find();
  }
}
