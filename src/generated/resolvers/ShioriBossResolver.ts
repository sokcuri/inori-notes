import { Resolver, Query } from 'type-graphql';
import { ShioriBoss } from '../entities/ShioriBoss';

@Resolver()
export class ShioriBossResolver {
  @Query(() => [ShioriBoss])
  ShioriBoss() {
    return ShioriBoss.find();
  }
}
