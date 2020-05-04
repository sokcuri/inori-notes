import { Resolver, Query } from 'type-graphql';
import { UniqueEquipmentCraft } from '../entities/UniqueEquipmentCraft';

@Resolver()
export class UniqueEquipmentCraftResolver {
  @Query(() => [UniqueEquipmentCraft])
  UniqueEquipmentCraft() {
    return UniqueEquipmentCraft.find();
  }
}
