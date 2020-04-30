import { Resolver, Query } from 'type-graphql';
import { GachaData } from '../models/GachaData';

@Resolver()
export class GachaDataResolver {
  @Query(() => [GachaData])
  GachaData() {
    return GachaData.find();
  }
}
