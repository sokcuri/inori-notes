import { Resolver, Query } from 'type-graphql';
import { EquipmentDonation } from '../models/EquipmentDonation';

@Resolver()
export class EquipmentDonationResolver {
  @Query(() => [EquipmentDonation])
  EquipmentDonation() {
    return EquipmentDonation.find();
  }
}
