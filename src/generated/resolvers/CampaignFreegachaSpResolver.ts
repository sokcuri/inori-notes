import { Resolver, Query } from 'type-graphql';
import { CampaignFreegachaSp } from '../entities/CampaignFreegachaSp';

@Resolver()
export class CampaignFreegachaSpResolver {
  @Query(() => [CampaignFreegachaSp])
  CampaignFreegachaSp() {
    return CampaignFreegachaSp.find();
  }
}
