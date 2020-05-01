import { Resolver, Query } from 'type-graphql';
import { ShioriStationaryMissionData } from '../entities/ShioriStationaryMissionData';

@Resolver()
export class ShioriStationaryMissionDataResolver {
  @Query(() => [ShioriStationaryMissionData])
  ShioriStationaryMissionData() {
    return ShioriStationaryMissionData.find();
  }
}
