import { Resolver, Query } from 'type-graphql';
import { UnitData } from '../entities/UnitData';

@Resolver()
export class UnitDataResolver {
  @Query(() => [UnitData])
  UnitData() {
    return UnitData.find();
  }
}
