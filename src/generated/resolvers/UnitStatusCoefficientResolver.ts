import { Resolver, Query } from 'type-graphql';
import { UnitStatusCoefficient } from '../entities/UnitStatusCoefficient';

@Resolver()
export class UnitStatusCoefficientResolver {
  @Query(() => [UnitStatusCoefficient])
  UnitStatusCoefficient() {
    return UnitStatusCoefficient.find();
  }
}
