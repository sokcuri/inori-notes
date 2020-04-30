import { Resolver, Query } from 'type-graphql';
import { ShioriBoss } from '../models/ShioriBoss';

@Resolver()
export class ShioriBossResolver {
  @Query(() => [ShioriBoss])
  ShioriBoss() {
    return ShioriBoss.find();
  }
}
