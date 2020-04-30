import { Resolver, Query } from 'type-graphql';
import { CampaignFreegachaData } from '../models/CampaignFreegachaData';

@Resolver()
export class CampaignFreegachaDataResolver {
  @Query(() => [CampaignFreegachaData])
  CampaignFreegachaData() {
    return CampaignFreegachaData.find();
  }
}
