import { Resolver, Query } from 'type-graphql';
import { EquipmentEnhanceData } from '../entities/EquipmentEnhanceData';

@Resolver()
export class EquipmentEnhanceDataResolver {
  @Query(() => [EquipmentEnhanceData])
  EquipmentEnhanceData() {
    return EquipmentEnhanceData.find();
  }
}
