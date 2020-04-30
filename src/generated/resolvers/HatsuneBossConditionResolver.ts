import { Resolver, Query } from 'type-graphql';
import { HatsuneBossCondition } from '../models/HatsuneBossCondition';

@Resolver()
export class HatsuneBossConditionResolver {
  @Query(() => [HatsuneBossCondition])
  HatsuneBossCondition() {
    return HatsuneBossCondition.find();
  }
}
