import { Resolver, Query } from 'type-graphql';
import { VisualCustomize } from '../entities/VisualCustomize';

@Resolver()
export class VisualCustomizeResolver {
  @Query(() => [VisualCustomize])
  VisualCustomize() {
    return VisualCustomize.find();
  }
}
