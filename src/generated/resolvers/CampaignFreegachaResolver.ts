import { Resolver, Query } from 'type-graphql';
import { CampaignFreegacha } from '../models/CampaignFreegacha';

@Resolver()
export class CampaignFreegachaResolver {
  @Query(() => [CampaignFreegacha])
  CampaignFreegacha() {
    return CampaignFreegacha.find();
  }
}
