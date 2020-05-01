import { Resolver, Query } from 'type-graphql';
import { CampaignMissionSchedule } from '../entities/CampaignMissionSchedule';

@Resolver()
export class CampaignMissionScheduleResolver {
  @Query(() => [CampaignMissionSchedule])
  CampaignMissionSchedule() {
    return CampaignMissionSchedule.find();
  }
}
