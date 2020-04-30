import { Resolver, Query } from 'type-graphql';
import { HatsuneBoss } from '../models/HatsuneBoss';

@Resolver()
export class HatsuneBossResolver {
  @Query(() => [HatsuneBoss])
  HatsuneBoss() {
    return HatsuneBoss.find();
  }
}
