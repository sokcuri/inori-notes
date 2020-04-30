import { Resolver, Query } from 'type-graphql';
import { TtkWeapon } from '../models/TtkWeapon';

@Resolver()
export class TtkWeaponResolver {
  @Query(() => [TtkWeapon])
  TtkWeapon() {
    return TtkWeapon.find();
  }
}
