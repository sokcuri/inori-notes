import { Resolver, Query } from 'type-graphql';
import { ShioriMissionRewardData } from '../entities/ShioriMissionRewardData';

@Resolver()
export class ShioriMissionRewardDataResolver {
  @Query(() => [ShioriMissionRewardData])
  ShioriMissionRewardData() {
    return ShioriMissionRewardData.find();
  }
}
