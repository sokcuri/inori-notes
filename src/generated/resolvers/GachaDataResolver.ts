import { Resolver, Query } from 'type-graphql';
import { GachaData } from '../entities/GachaData';

@Resolver()
export class GachaDataResolver {
  @Query(() => [GachaData])
  GachaData() {
    return GachaData.find();
  }
}
