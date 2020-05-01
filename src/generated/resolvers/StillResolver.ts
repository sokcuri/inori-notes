import { Resolver, Query } from 'type-graphql';
import { Still } from '../entities/Still';

@Resolver()
export class StillResolver {
  @Query(() => [Still])
  Still() {
    return Still.find();
  }
}
