import { Resolver, Query } from 'type-graphql';
import { EmblemMissionRewardData } from '../models/EmblemMissionRewardData';

@Resolver()
export class EmblemMissionRewardDataResolver {
  @Query(() => [EmblemMissionRewardData])
  EmblemMissionRewardData() {
    return EmblemMissionRewardData.find();
  }
}
