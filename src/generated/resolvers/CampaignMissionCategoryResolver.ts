import { Resolver, Query } from 'type-graphql';
import { CampaignMissionCategory } from '../entities/CampaignMissionCategory';

@Resolver()
export class CampaignMissionCategoryResolver {
  @Query(() => [CampaignMissionCategory])
  CampaignMissionCategory() {
    return CampaignMissionCategory.find();
  }
}
