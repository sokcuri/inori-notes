import { Resolver, Query } from 'type-graphql';
import { ShioriWaveGroupData } from '../models/ShioriWaveGroupData';

@Resolver()
export class ShioriWaveGroupDataResolver {
  @Query(() => [ShioriWaveGroupData])
  ShioriWaveGroupData() {
    return ShioriWaveGroupData.find();
  }
}
