import { Resolver, Query } from 'type-graphql';
import { WaveGroupData } from '../entities/WaveGroupData';

@Resolver()
export class WaveGroupDataResolver {
  @Query(() => [WaveGroupData])
  WaveGroupData() {
    return WaveGroupData.find();
  }
}
