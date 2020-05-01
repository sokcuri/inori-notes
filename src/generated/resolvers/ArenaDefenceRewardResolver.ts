import { Resolver, Query } from 'type-graphql';
import { ArenaDefenceReward } from '../entities/ArenaDefenceReward';

@Resolver()
export class ArenaDefenceRewardResolver {
  @Query(() => [ArenaDefenceReward])
  ArenaDefenceReward() {
    return ArenaDefenceReward.find();
  }
}
