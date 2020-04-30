import { Resolver, Query } from 'type-graphql';
import { ReturnSpecialfesBanner } from '../models/ReturnSpecialfesBanner';

@Resolver()
export class ReturnSpecialfesBannerResolver {
  @Query(() => [ReturnSpecialfesBanner])
  ReturnSpecialfesBanner() {
    return ReturnSpecialfesBanner.find();
  }
}
