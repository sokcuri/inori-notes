import { Resolver, Query } from 'type-graphql';
import { TtkReward } from '../models/TtkReward';

@Resolver()
export class TtkRewardResolver {
  @Query(() => [TtkReward])
  TtkReward() {
    return TtkReward.find();
  }
}
