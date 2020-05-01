import { Resolver, Query } from 'type-graphql';
import { UnitUniqueEquip } from '../entities/UnitUniqueEquip';

@Resolver()
export class UnitUniqueEquipResolver {
  @Query(() => [UnitUniqueEquip])
  UnitUniqueEquip() {
    return UnitUniqueEquip.find();
  }
}
