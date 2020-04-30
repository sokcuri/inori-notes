import { Resolver, Query } from 'type-graphql';
import { RewardCollectGuide } from '../models/RewardCollectGuide';

@Resolver()
export class RewardCollectGuideResolver {
  @Query(() => [RewardCollectGuide])
  RewardCollectGuide() {
    return RewardCollectGuide.find();
  }
}
