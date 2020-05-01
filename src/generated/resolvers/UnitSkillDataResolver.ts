import { Resolver, Query } from 'type-graphql';
import { UnitSkillData } from '../entities/UnitSkillData';

@Resolver()
export class UnitSkillDataResolver {
  @Query(() => [UnitSkillData])
  UnitSkillData() {
    return UnitSkillData.find();
  }
}
