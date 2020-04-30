import { Resolver, Query } from 'type-graphql';
import { SekaiBossFixReward } from '../models/SekaiBossFixReward';

@Resolver()
export class SekaiBossFixRewardResolver {
  @Query(() => [SekaiBossFixReward])
  SekaiBossFixReward() {
    return SekaiBossFixReward.find();
  }
}
