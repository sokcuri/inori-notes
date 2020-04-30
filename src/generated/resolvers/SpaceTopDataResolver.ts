import { Resolver, Query } from 'type-graphql';
import { SpaceTopData } from '../models/SpaceTopData';

@Resolver()
export class SpaceTopDataResolver {
  @Query(() => [SpaceTopData])
  SpaceTopData() {
    return SpaceTopData.find();
  }
}
