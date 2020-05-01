import { Resolver, Query } from 'type-graphql';
import { EquipmentData } from '../entities/EquipmentData';

@Resolver()
export class EquipmentDataResolver {
  @Query(() => [EquipmentData])
  EquipmentData() {
    return EquipmentData.find();
  }
}
