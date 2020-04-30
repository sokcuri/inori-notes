import { Resolver, Query } from 'type-graphql';
import { UniqueEquipmentEnhanceRate } from '../models/UniqueEquipmentEnhanceRate';

@Resolver()
export class UniqueEquipmentEnhanceRateResolver {
  @Query(() => [UniqueEquipmentEnhanceRate])
  UniqueEquipmentEnhanceRate() {
    return UniqueEquipmentEnhanceRate.find();
  }
}
