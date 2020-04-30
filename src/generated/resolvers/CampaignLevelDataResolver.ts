import { Resolver, Query } from 'type-graphql';
import { CampaignLevelData } from '../models/CampaignLevelData';

@Resolver()
export class CampaignLevelDataResolver {
  @Query(() => [CampaignLevelData])
  CampaignLevelData() {
    return CampaignLevelData.find();
  }
}
