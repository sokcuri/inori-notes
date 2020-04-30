import { Resolver, Query } from 'type-graphql';
import { HatsuneEmblemMission } from '../models/HatsuneEmblemMission';

@Resolver()
export class HatsuneEmblemMissionResolver {
  @Query(() => [HatsuneEmblemMission])
  HatsuneEmblemMission() {
    return HatsuneEmblemMission.find();
  }
}
