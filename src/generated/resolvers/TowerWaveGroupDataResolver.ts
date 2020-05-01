import { Resolver, Query } from 'type-graphql';
import { TowerWaveGroupData } from '../entities/TowerWaveGroupData';

@Resolver()
export class TowerWaveGroupDataResolver {
  @Query(() => [TowerWaveGroupData])
  TowerWaveGroupData() {
    return TowerWaveGroupData.find();
  }
}
