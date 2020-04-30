import { Resolver, Query } from 'type-graphql';
import { UekMission } from '../models/UekMission';

@Resolver()
export class UekMissionResolver {
  @Query(() => [UekMission])
  UekMission() {
    return UekMission.find();
  }
}
