import { Resolver, Query } from 'type-graphql';
import { KmkReward } from '../entities/KmkReward';

@Resolver()
export class KmkRewardResolver {
  @Query(() => [KmkReward])
  KmkReward() {
    return KmkReward.find();
  }
}
