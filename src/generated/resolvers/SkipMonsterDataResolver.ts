import { Resolver, Query } from 'type-graphql';
import { SkipMonsterData } from '../models/SkipMonsterData';

@Resolver()
export class SkipMonsterDataResolver {
  @Query(() => [SkipMonsterData])
  SkipMonsterData() {
    return SkipMonsterData.find();
  }
}
