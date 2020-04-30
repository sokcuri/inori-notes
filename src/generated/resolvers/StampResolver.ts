import { Resolver, Query } from 'type-graphql';
import { Stamp } from '../models/Stamp';

@Resolver()
export class StampResolver {
  @Query(() => [Stamp])
  Stamp() {
    return Stamp.find();
  }
}
