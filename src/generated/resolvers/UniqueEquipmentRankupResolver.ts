import { Resolver, Query } from 'type-graphql';
import { UniqueEquipmentRankup } from '../entities/UniqueEquipmentRankup';

@Resolver()
export class UniqueEquipmentRankupResolver {
  @Query(() => [UniqueEquipmentRankup])
  UniqueEquipmentRankup() {
    return UniqueEquipmentRankup.find();
  }
}
