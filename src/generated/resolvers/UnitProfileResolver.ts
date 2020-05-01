import { Resolver, Query } from 'type-graphql';
import { UnitProfile } from '../entities/UnitProfile';

@Resolver()
export class UnitProfileResolver {
  @Query(() => [UnitProfile])
  UnitProfile() {
    return UnitProfile.find();
  }
}
