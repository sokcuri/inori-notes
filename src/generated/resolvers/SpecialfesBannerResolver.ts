import { Resolver, Query } from 'type-graphql';
import { SpecialfesBanner } from '../models/SpecialfesBanner';

@Resolver()
export class SpecialfesBannerResolver {
  @Query(() => [SpecialfesBanner])
  SpecialfesBanner() {
    return SpecialfesBanner.find();
  }
}
