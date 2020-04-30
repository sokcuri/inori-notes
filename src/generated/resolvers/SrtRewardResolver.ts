import { Resolver, Query } from 'type-graphql';
import { SrtReward } from '../models/SrtReward';

@Resolver()
export class SrtRewardResolver {
  @Query(() => [SrtReward])
  SrtReward() {
    return SrtReward.find();
  }
}
