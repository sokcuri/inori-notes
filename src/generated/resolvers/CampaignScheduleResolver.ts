import { Resolver, Query } from 'type-graphql';
import { CampaignSchedule } from '../models/CampaignSchedule';

@Resolver()
export class CampaignScheduleResolver {
  @Query(() => [CampaignSchedule])
  CampaignSchedule() {
    return CampaignSchedule.find();
  }
}
