import { Resolver, Query } from 'type-graphql';
import { KaiserRestrictionGroup } from '../entities/KaiserRestrictionGroup';

@Resolver()
export class KaiserRestrictionGroupResolver {
  @Query(() => [KaiserRestrictionGroup])
  KaiserRestrictionGroup() {
    return KaiserRestrictionGroup.find();
  }
}
