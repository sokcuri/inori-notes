import { Resolver, Query } from 'type-graphql';
import { BgData } from '../entities/BgData';

@Resolver()
export class BgDataResolver {
  @Query(() => [BgData])
  BgData() {
    return BgData.find();
  }
}
