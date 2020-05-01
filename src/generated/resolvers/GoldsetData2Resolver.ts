import { Resolver, Query } from 'type-graphql';
import { GoldsetData2 } from '../entities/GoldsetData2';

@Resolver()
export class GoldsetData2Resolver {
  @Query(() => [GoldsetData2])
  GoldsetData2() {
    return GoldsetData2.find();
  }
}
