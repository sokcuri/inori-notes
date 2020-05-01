import { Resolver, Query } from 'type-graphql';
import { UnitAttackPattern } from '../entities/UnitAttackPattern';

@Resolver()
export class UnitAttackPatternResolver {
  @Query(() => [UnitAttackPattern])
  UnitAttackPattern() {
    return UnitAttackPattern.find();
  }
}
