import { Resolver, Query } from 'type-graphql';
import { CampaignMissionData } from '../entities/CampaignMissionData';

@Resolver()
export class CampaignMissionDataResolver {
  @Query(() => [CampaignMissionData])
  CampaignMissionData() {
    return CampaignMissionData.find();
  }
}
