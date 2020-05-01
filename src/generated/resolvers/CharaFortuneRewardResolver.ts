import { Resolver, Query } from 'type-graphql';
import { CharaFortuneReward } from '../entities/CharaFortuneReward';

@Resolver()
export class CharaFortuneRewardResolver {
  @Query(() => [CharaFortuneReward])
  CharaFortuneReward() {
    return CharaFortuneReward.find();
  }
}
