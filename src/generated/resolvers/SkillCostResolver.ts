import { Resolver, Query } from 'type-graphql';
import { SkillCost } from '../models/SkillCost';

@Resolver()
export class SkillCostResolver {
  @Query(() => [SkillCost])
  SkillCost() {
    return SkillCost.find();
  }
}
