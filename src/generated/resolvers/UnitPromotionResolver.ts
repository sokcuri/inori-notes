import { Resolver, Query } from 'type-graphql';
import { UnitPromotion } from '../entities/UnitPromotion';

@Resolver()
export class UnitPromotionResolver {
  @Query(() => [UnitPromotion])
  UnitPromotion() {
    return UnitPromotion.find();
  }
}
