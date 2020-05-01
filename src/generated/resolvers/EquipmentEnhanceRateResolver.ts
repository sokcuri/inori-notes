import { Resolver, Query } from 'type-graphql';
import { EquipmentEnhanceRate } from '../entities/EquipmentEnhanceRate';

@Resolver()
export class EquipmentEnhanceRateResolver {
  @Query(() => [EquipmentEnhanceRate])
  EquipmentEnhanceRate() {
    return EquipmentEnhanceRate.find();
  }
}
