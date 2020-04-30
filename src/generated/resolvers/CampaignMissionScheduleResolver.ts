import { Resolver, Query } from 'type-graphql';
import { CampaignMissionSchedule } from '../models/CampaignMissionSchedule';

@Resolver()
export class CampaignMissionScheduleResolver {
  @Query(() => [CampaignMissionSchedule])
  CampaignMissionSchedule() {
    return CampaignMissionSchedule.find();
  }
}
