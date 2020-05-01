import { Resolver, Query } from 'type-graphql';
import { DearReward } from '../entities/DearReward';

@Resolver()
export class DearRewardResolver {
  @Query(() => [DearReward])
  DearReward() {
    return DearReward.find();
  }
}
