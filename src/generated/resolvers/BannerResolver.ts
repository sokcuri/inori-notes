import { Resolver, Query } from 'type-graphql';
import { Banner } from '../entities/Banner';

@Resolver()
export class BannerResolver {
  @Query(() => [Banner])
  Banner() {
    return Banner.find();
  }
}
