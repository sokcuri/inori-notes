import { Resolver, Query } from 'type-graphql';
import { SeasonPack } from '../entities/SeasonPack';

@Resolver()
export class SeasonPackResolver {
  @Query(() => [SeasonPack])
  SeasonPack() {
    return SeasonPack.find();
  }
}
