import { Resolver, Query } from 'type-graphql';
import { Worldmap } from '../entities/Worldmap';

@Resolver()
export class WorldmapResolver {
  @Query(() => [Worldmap])
  Worldmap() {
    return Worldmap.find();
  }
}
