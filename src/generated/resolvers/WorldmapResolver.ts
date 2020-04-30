import { Resolver, Query } from 'type-graphql';
import { Worldmap } from '../models/Worldmap';

@Resolver()
export class WorldmapResolver {
  @Query(() => [Worldmap])
  Worldmap() {
    return Worldmap.find();
  }
}
