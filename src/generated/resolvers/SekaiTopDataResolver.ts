import { Resolver, Query } from 'type-graphql';
import { SekaiTopData } from '../models/SekaiTopData';

@Resolver()
export class SekaiTopDataResolver {
  @Query(() => [SekaiTopData])
  SekaiTopData() {
    return SekaiTopData.find();
  }
}
