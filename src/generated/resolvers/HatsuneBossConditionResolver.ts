import { Resolver, Query } from 'type-graphql';
import { HatsuneBossCondition } from '../entities/HatsuneBossCondition';

@Resolver()
export class HatsuneBossConditionResolver {
  @Query(() => [HatsuneBossCondition])
  HatsuneBossCondition() {
    return HatsuneBossCondition.find();
  }
}
