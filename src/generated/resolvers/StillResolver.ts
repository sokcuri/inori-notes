import { Resolver, Query } from 'type-graphql';
import { Still } from '../models/Still';

@Resolver()
export class StillResolver {
  @Query(() => [Still])
  Still() {
    return Still.find();
  }
}
