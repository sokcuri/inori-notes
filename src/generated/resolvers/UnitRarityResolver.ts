import { Resolver, Query } from 'type-graphql';
import { UnitRarity } from '../models/UnitRarity';

@Resolver()
export class UnitRarityResolver {
  @Query(() => [UnitRarity])
  UnitRarity() {
    return UnitRarity.find();
  }
}
