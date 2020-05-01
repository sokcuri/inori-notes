import { Resolver, Query } from 'type-graphql';
import { ShioriBossCondition } from '../entities/ShioriBossCondition';

@Resolver()
export class ShioriBossConditionResolver {
  @Query(() => [ShioriBossCondition])
  ShioriBossCondition() {
    return ShioriBossCondition.find();
  }
}
