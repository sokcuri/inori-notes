import { Resolver, Query } from 'type-graphql';
import { PrizegachaData } from '../models/PrizegachaData';

@Resolver()
export class PrizegachaDataResolver {
  @Query(() => [PrizegachaData])
  PrizegachaData() {
    return PrizegachaData.find();
  }
}
