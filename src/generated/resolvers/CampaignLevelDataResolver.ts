import { Resolver, Query } from 'type-graphql';
import { CampaignLevelData } from '../entities/CampaignLevelData';

@Resolver()
export class CampaignLevelDataResolver {
  @Query(() => [CampaignLevelData])
  CampaignLevelData() {
    return CampaignLevelData.find();
  }
}
