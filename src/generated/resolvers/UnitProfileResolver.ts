import { Resolver, Query } from 'type-graphql';
import { UnitProfile } from '../models/UnitProfile';

@Resolver()
export class UnitProfileResolver {
  @Query(() => [UnitProfile])
  UnitProfile() {
    return UnitProfile.find();
  }
}
