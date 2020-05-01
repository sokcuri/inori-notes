import { Resolver, Query } from 'type-graphql';
import { PctReward } from '../entities/PctReward';

@Resolver()
export class PctRewardResolver {
  @Query(() => [PctReward])
  PctReward() {
    return PctReward.find();
  }
}
