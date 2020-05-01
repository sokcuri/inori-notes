import { Resolver, Query } from 'type-graphql';
import { GrandArenaDefenceReward } from '../entities/GrandArenaDefenceReward';

@Resolver()
export class GrandArenaDefenceRewardResolver {
  @Query(() => [GrandArenaDefenceReward])
  GrandArenaDefenceReward() {
    return GrandArenaDefenceReward.find();
  }
}
