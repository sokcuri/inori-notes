import { Resolver, Query } from 'type-graphql';
import { ShopStaticPriceGroup } from '../entities/ShopStaticPriceGroup';

@Resolver()
export class ShopStaticPriceGroupResolver {
  @Query(() => [ShopStaticPriceGroup])
  ShopStaticPriceGroup() {
    return ShopStaticPriceGroup.find();
  }
}
