import { Resolver, Query } from 'type-graphql';
import { SkillCost } from '../entities/SkillCost';

@Resolver()
export class SkillCostResolver {
  @Query(() => [SkillCost])
  SkillCost() {
    return SkillCost.find();
  }
}
