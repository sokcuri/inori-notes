import { Resolver, Query } from 'type-graphql';
import { HatsuneEmblemMission } from '../entities/HatsuneEmblemMission';

@Resolver()
export class HatsuneEmblemMissionResolver {
  @Query(() => [HatsuneEmblemMission])
  HatsuneEmblemMission() {
    return HatsuneEmblemMission.find();
  }
}
