import { Resolver, Query } from 'type-graphql';
import { UniqueEquipmentEnhanceData } from '../models/UniqueEquipmentEnhanceData';

@Resolver()
export class UniqueEquipmentEnhanceDataResolver {
  @Query(() => [UniqueEquipmentEnhanceData])
  UniqueEquipmentEnhanceData() {
    return UniqueEquipmentEnhanceData.find();
  }
}
