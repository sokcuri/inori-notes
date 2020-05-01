import { Resolver, Query } from 'type-graphql';
import { UnitPromotionStatus } from '../entities/UnitPromotionStatus';

@Resolver()
export class UnitPromotionStatusResolver {
  @Query(() => [UnitPromotionStatus])
  UnitPromotionStatus() {
    return UnitPromotionStatus.find();
  }
}
