import { Resolver, Query } from 'type-graphql';
import { SekaiBossMode } from '../models/SekaiBossMode';

@Resolver()
export class SekaiBossModeResolver {
  @Query(() => [SekaiBossMode])
  SekaiBossMode() {
    return SekaiBossMode.find();
  }
}
