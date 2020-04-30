import { Resolver, Query } from 'type-graphql';
import { EmblemMissionData } from '../models/EmblemMissionData';

@Resolver()
export class EmblemMissionDataResolver {
  @Query(() => [EmblemMissionData])
  EmblemMissionData() {
    return EmblemMissionData.find();
  }
}
