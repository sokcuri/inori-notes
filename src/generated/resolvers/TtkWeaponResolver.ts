import { Resolver, Query } from 'type-graphql';
import { TtkWeapon } from '../entities/TtkWeapon';

@Resolver()
export class TtkWeaponResolver {
  @Query(() => [TtkWeapon])
  TtkWeapon() {
    return TtkWeapon.find();
  }
}
