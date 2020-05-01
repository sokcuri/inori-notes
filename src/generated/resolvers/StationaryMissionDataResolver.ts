import { Resolver, Query } from 'type-graphql';
import { StationaryMissionData } from '../entities/StationaryMissionData';

@Resolver()
export class StationaryMissionDataResolver {
  @Query(() => [StationaryMissionData])
  StationaryMissionData() {
    return StationaryMissionData.find();
  }
}
