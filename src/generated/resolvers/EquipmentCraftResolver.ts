import { Resolver, Query } from 'type-graphql';
import { EquipmentCraft } from '../models/EquipmentCraft';

@Resolver()
export class EquipmentCraftResolver {
  @Query(() => [EquipmentCraft])
  EquipmentCraft() {
    return EquipmentCraft.find();
  }
}
