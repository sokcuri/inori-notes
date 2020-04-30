import { Resolver, Query } from 'type-graphql';
import { KaiserExterminationReward } from '../models/KaiserExterminationReward';

@Resolver()
export class KaiserExterminationRewardResolver {
  @Query(() => [KaiserExterminationReward])
  KaiserExterminationReward() {
    return KaiserExterminationReward.find();
  }
}
