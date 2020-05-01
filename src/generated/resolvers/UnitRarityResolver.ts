import { Resolver, Query } from 'type-graphql';
import { UnitRarity } from '../entities/UnitRarity';

@Resolver()
export class UnitRarityResolver {
  @Query(() => [UnitRarity])
  UnitRarity() {
    return UnitRarity.find();
  }
}
