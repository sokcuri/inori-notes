import { Resolver, Query } from 'type-graphql';
import { SekaiTopData } from '../entities/SekaiTopData';

@Resolver()
export class SekaiTopDataResolver {
  @Query(() => [SekaiTopData])
  SekaiTopData() {
    return SekaiTopData.find();
  }
}
