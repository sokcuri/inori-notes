import { Resolver, Query } from 'type-graphql';
import { CombinedResultMotion } from '../entities/CombinedResultMotion';

@Resolver()
export class CombinedResultMotionResolver {
  @Query(() => [CombinedResultMotion])
  CombinedResultMotion() {
    return CombinedResultMotion.find();
  }
}
