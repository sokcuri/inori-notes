import { Resolver, Query } from 'type-graphql';
import { PctComboCoefficient } from '../models/PctComboCoefficient';

@Resolver()
export class PctComboCoefficientResolver {
  @Query(() => [PctComboCoefficient])
  PctComboCoefficient() {
    return PctComboCoefficient.find();
  }
}
