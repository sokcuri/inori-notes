import { Resolver, Query } from 'type-graphql';
import { SkillData } from '../entities/SkillData';

@Resolver()
export class SkillDataResolver {
  @Query(() => [SkillData])
  SkillData() {
    return SkillData.find();
  }
}
