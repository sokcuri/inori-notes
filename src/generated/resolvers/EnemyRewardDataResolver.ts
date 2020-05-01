import { Resolver, Query } from 'type-graphql';
import { EnemyRewardData } from '../entities/EnemyRewardData';

@Resolver()
export class EnemyRewardDataResolver {
  @Query(() => [EnemyRewardData])
  EnemyRewardData() {
    return EnemyRewardData.find();
  }
}
