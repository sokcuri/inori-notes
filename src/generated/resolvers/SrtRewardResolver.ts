import { Resolver, Query } from 'type-graphql';
import { SrtReward } from '../entities/SrtReward';

@Resolver()
export class SrtRewardResolver {
  @Query(() => [SrtReward])
  SrtReward() {
    return SrtReward.find();
  }
}
