import { Resolver, Query } from 'type-graphql';
import { EquipmentData } from '../models/EquipmentData';

@Resolver()
export class EquipmentDataResolver {
  @Query(() => [EquipmentData])
  EquipmentData() {
    return EquipmentData.find();
  }
}
