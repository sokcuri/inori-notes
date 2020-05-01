import { Resolver, Query } from 'type-graphql';
import { ShioriWaveGroupData } from '../entities/ShioriWaveGroupData';

@Resolver()
export class ShioriWaveGroupDataResolver {
  @Query(() => [ShioriWaveGroupData])
  ShioriWaveGroupData() {
    return ShioriWaveGroupData.find();
  }
}
