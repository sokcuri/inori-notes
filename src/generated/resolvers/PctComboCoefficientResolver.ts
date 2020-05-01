import { Resolver, Query } from 'type-graphql';
import { PctComboCoefficient } from '../entities/PctComboCoefficient';

@Resolver()
export class PctComboCoefficientResolver {
  @Query(() => [PctComboCoefficient])
  PctComboCoefficient() {
    return PctComboCoefficient.find();
  }
}
