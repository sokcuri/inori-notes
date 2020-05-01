import { Resolver, Query } from 'type-graphql';
import { CampaignFreegachaData } from '../entities/CampaignFreegachaData';

@Resolver()
export class CampaignFreegachaDataResolver {
  @Query(() => [CampaignFreegachaData])
  CampaignFreegachaData() {
    return CampaignFreegachaData.find();
  }
}
