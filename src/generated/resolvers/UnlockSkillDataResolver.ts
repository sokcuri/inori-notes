import { Resolver, Query } from 'type-graphql';
import { UnlockSkillData } from '../entities/UnlockSkillData';

@Resolver()
export class UnlockSkillDataResolver {
  @Query(() => [UnlockSkillData])
  UnlockSkillData() {
    return UnlockSkillData.find();
  }
}
