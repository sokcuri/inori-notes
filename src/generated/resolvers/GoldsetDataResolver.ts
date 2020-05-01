import { Resolver, Query } from 'type-graphql';
import { GoldsetData } from '../entities/GoldsetData';

@Resolver()
export class GoldsetDataResolver {
  @Query(() => [GoldsetData])
  GoldsetData() {
    return GoldsetData.find();
  }
}
