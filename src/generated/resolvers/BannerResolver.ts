import { Resolver, Query } from 'type-graphql';
import { Banner } from '../models/Banner';

@Resolver()
export class BannerResolver {
  @Query(() => [Banner])
  Banner() {
    return Banner.find();
  }
}
