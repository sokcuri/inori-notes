import { Resolver, Query } from 'type-graphql';
import { VisualCustomize } from '../models/VisualCustomize';

@Resolver()
export class VisualCustomizeResolver {
  @Query(() => [VisualCustomize])
  VisualCustomize() {
    return VisualCustomize.find();
  }
}
