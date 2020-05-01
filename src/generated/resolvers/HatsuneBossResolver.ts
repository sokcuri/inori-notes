import { Resolver, Query } from 'type-graphql';
import { HatsuneBoss } from '../entities/HatsuneBoss';

@Resolver()
export class HatsuneBossResolver {
  @Query(() => [HatsuneBoss])
  HatsuneBoss() {
    return HatsuneBoss.find();
  }
}
