import { Resolver, Query } from 'type-graphql';
import { UniqueEquipmentData } from '../models/UniqueEquipmentData';

@Resolver()
export class UniqueEquipmentDataResolver {
  @Query(() => [UniqueEquipmentData])
  UniqueEquipmentData() {
    return UniqueEquipmentData.find();
  }
}
