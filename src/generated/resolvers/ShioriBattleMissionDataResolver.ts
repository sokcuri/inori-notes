import { Resolver, Query } from 'type-graphql';
import { ShioriBattleMissionData } from '../entities/ShioriBattleMissionData';

@Resolver()
export class ShioriBattleMissionDataResolver {
  @Query(() => [ShioriBattleMissionData])
  ShioriBattleMissionData() {
    return ShioriBattleMissionData.find();
  }
}
