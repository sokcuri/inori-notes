import { Resolver, Query } from 'type-graphql';
import { SkillAction } from '../models/SkillAction';

@Resolver()
export class SkillActionResolver {
  @Query(() => [SkillAction])
  SkillAction() {
    return SkillAction.find();
  }
}
