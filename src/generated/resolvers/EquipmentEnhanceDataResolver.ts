import { Resolver, Query } from 'type-graphql';
import { EquipmentEnhanceData } from '../models/EquipmentEnhanceData';

@Resolver()
export class EquipmentEnhanceDataResolver {
  @Query(() => [EquipmentEnhanceData])
  EquipmentEnhanceData() {
    return EquipmentEnhanceData.find();
  }
}
