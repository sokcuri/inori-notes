import { Resolver, Query } from 'type-graphql';
import { ShioriBossCondition } from '../models/ShioriBossCondition';

@Resolver()
export class ShioriBossConditionResolver {
  @Query(() => [ShioriBossCondition])
  ShioriBossCondition() {
    return ShioriBossCondition.find();
  }
}
