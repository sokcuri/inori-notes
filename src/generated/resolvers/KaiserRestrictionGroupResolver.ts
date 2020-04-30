import { Resolver, Query } from 'type-graphql';
import { KaiserRestrictionGroup } from '../models/KaiserRestrictionGroup';

@Resolver()
export class KaiserRestrictionGroupResolver {
  @Query(() => [KaiserRestrictionGroup])
  KaiserRestrictionGroup() {
    return KaiserRestrictionGroup.find();
  }
}
