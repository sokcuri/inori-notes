import { Resolver, Query } from 'type-graphql';
import { PrizegachaData } from '../entities/PrizegachaData';

@Resolver()
export class PrizegachaDataResolver {
  @Query(() => [PrizegachaData])
  PrizegachaData() {
    return PrizegachaData.find();
  }
}
