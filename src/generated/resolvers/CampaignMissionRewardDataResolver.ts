import { Resolver, Query } from 'type-graphql';
import { CampaignMissionRewardData } from '../models/CampaignMissionRewardData';

@Resolver()
export class CampaignMissionRewardDataResolver {
  @Query(() => [CampaignMissionRewardData])
  CampaignMissionRewardData() {
    return CampaignMissionRewardData.find();
  }
}
