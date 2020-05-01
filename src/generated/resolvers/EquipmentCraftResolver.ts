import { Resolver, Query } from 'type-graphql';
import { EquipmentCraft } from '../entities/EquipmentCraft';

@Resolver()
export class EquipmentCraftResolver {
  @Query(() => [EquipmentCraft])
  EquipmentCraft() {
    return EquipmentCraft.find();
  }
}
