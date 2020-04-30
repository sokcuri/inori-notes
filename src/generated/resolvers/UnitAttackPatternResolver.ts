import { Resolver, Query } from 'type-graphql';
import { UnitAttackPattern } from '../models/UnitAttackPattern';

@Resolver()
export class UnitAttackPatternResolver {
  @Query(() => [UnitAttackPattern])
  UnitAttackPattern() {
    return UnitAttackPattern.find();
  }
}
