import { Resolver, Query } from 'type-graphql';
import { UnitData } from '../models/UnitData';

@Resolver()
export class UnitDataResolver {
  @Query(() => [UnitData])
  UnitData() {
    return UnitData.find();
  }
}
