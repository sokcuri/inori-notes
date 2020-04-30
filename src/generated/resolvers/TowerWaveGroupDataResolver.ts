import { Resolver, Query } from 'type-graphql';
import { TowerWaveGroupData } from '../models/TowerWaveGroupData';

@Resolver()
export class TowerWaveGroupDataResolver {
  @Query(() => [TowerWaveGroupData])
  TowerWaveGroupData() {
    return TowerWaveGroupData.find();
  }
}
