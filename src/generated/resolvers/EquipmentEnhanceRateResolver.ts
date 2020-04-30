import { Resolver, Query } from 'type-graphql';
import { EquipmentEnhanceRate } from '../models/EquipmentEnhanceRate';

@Resolver()
export class EquipmentEnhanceRateResolver {
  @Query(() => [EquipmentEnhanceRate])
  EquipmentEnhanceRate() {
    return EquipmentEnhanceRate.find();
  }
}
