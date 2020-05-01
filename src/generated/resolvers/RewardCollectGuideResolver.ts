import { Resolver, Query } from 'type-graphql';
import { RewardCollectGuide } from '../entities/RewardCollectGuide';

@Resolver()
export class RewardCollectGuideResolver {
  @Query(() => [RewardCollectGuide])
  RewardCollectGuide() {
    return RewardCollectGuide.find();
  }
}
