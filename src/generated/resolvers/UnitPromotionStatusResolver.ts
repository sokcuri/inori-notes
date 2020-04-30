import { Resolver, Query } from 'type-graphql';
import { UnitPromotionStatus } from '../models/UnitPromotionStatus';

@Resolver()
export class UnitPromotionStatusResolver {
  @Query(() => [UnitPromotionStatus])
  UnitPromotionStatus() {
    return UnitPromotionStatus.find();
  }
}
