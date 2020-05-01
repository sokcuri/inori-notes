import { Resolver, Query } from 'type-graphql';
import { CampaignSchedule } from '../entities/CampaignSchedule';

@Resolver()
export class CampaignScheduleResolver {
  @Query(() => [CampaignSchedule])
  CampaignSchedule() {
    return CampaignSchedule.find();
  }
}
