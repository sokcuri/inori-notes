import { Resolver, Query } from 'type-graphql';
import { ShopStaticPriceGroup } from '../models/ShopStaticPriceGroup';

@Resolver()
export class ShopStaticPriceGroupResolver {
  @Query(() => [ShopStaticPriceGroup])
  ShopStaticPriceGroup() {
    return ShopStaticPriceGroup.find();
  }
}
