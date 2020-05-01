import { Resolver, Query } from 'type-graphql';
import { TtkReward } from '../entities/TtkReward';

@Resolver()
export class TtkRewardResolver {
  @Query(() => [TtkReward])
  TtkReward() {
    return TtkReward.find();
  }
}
