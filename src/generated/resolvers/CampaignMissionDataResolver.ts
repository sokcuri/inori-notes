import { Resolver, Query } from 'type-graphql';
import { CampaignMissionData } from '../models/CampaignMissionData';

@Resolver()
export class CampaignMissionDataResolver {
  @Query(() => [CampaignMissionData])
  CampaignMissionData() {
    return CampaignMissionData.find();
  }
}
