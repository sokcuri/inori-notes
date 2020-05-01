import { Resolver, Query } from 'type-graphql';
import { ReturnSpecialfesBanner } from '../entities/ReturnSpecialfesBanner';

@Resolver()
export class ReturnSpecialfesBannerResolver {
  @Query(() => [ReturnSpecialfesBanner])
  ReturnSpecialfesBanner() {
    return ReturnSpecialfesBanner.find();
  }
}
