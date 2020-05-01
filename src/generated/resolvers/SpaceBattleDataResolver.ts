import { Resolver, Query } from 'type-graphql';
import { SpaceBattleData } from '../entities/SpaceBattleData';

@Resolver()
export class SpaceBattleDataResolver {
  @Query(() => [SpaceBattleData])
  SpaceBattleData() {
    return SpaceBattleData.find();
  }
}
