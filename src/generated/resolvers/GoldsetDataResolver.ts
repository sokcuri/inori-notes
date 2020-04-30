import { Resolver, Query } from 'type-graphql';
import { GoldsetData } from '../models/GoldsetData';

@Resolver()
export class GoldsetDataResolver {
  @Query(() => [GoldsetData])
  GoldsetData() {
    return GoldsetData.find();
  }
}
