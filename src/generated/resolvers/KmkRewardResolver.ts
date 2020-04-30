import { Resolver, Query } from 'type-graphql';
import { KmkReward } from '../models/KmkReward';

@Resolver()
export class KmkRewardResolver {
  @Query(() => [KmkReward])
  KmkReward() {
    return KmkReward.find();
  }
}
