import { Resolver, Query } from 'type-graphql';
import { CampaignMissionRewardData } from '../entities/CampaignMissionRewardData';

@Resolver()
export class CampaignMissionRewardDataResolver {
  @Query(() => [CampaignMissionRewardData])
  CampaignMissionRewardData() {
    return CampaignMissionRewardData.find();
  }
}
