import { Resolver, Query } from 'type-graphql';
import { CampaignFreegacha } from '../entities/CampaignFreegacha';

@Resolver()
export class CampaignFreegachaResolver {
  @Query(() => [CampaignFreegacha])
  CampaignFreegacha() {
    return CampaignFreegacha.find();
  }
}
