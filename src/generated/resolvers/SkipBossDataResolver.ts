import { Resolver, Query } from 'type-graphql';
import { SkipBossData } from '../models/SkipBossData';

@Resolver()
export class SkipBossDataResolver {
  @Query(() => [SkipBossData])
  SkipBossData() {
    return SkipBossData.find();
  }
}
