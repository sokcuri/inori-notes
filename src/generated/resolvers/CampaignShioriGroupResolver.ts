import { Resolver, Query } from 'type-graphql';
import { CampaignShioriGroup } from '../models/CampaignShioriGroup';

@Resolver()
export class CampaignShioriGroupResolver {
  @Query(() => [CampaignShioriGroup])
  CampaignShioriGroup() {
    return CampaignShioriGroup.find();
  }
}
