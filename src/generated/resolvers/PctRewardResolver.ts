import { Resolver, Query } from 'type-graphql';
import { PctReward } from '../models/PctReward';

@Resolver()
export class PctRewardResolver {
  @Query(() => [PctReward])
  PctReward() {
    return PctReward.find();
  }
}
