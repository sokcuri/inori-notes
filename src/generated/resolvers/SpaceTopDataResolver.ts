import { Resolver, Query } from 'type-graphql';
import { SpaceTopData } from '../entities/SpaceTopData';

@Resolver()
export class SpaceTopDataResolver {
  @Query(() => [SpaceTopData])
  SpaceTopData() {
    return SpaceTopData.find();
  }
}
