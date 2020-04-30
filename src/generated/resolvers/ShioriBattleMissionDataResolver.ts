import { Resolver, Query } from 'type-graphql';
import { ShioriBattleMissionData } from '../models/ShioriBattleMissionData';

@Resolver()
export class ShioriBattleMissionDataResolver {
  @Query(() => [ShioriBattleMissionData])
  ShioriBattleMissionData() {
    return ShioriBattleMissionData.find();
  }
}
