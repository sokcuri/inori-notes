import { Resolver, Query } from 'type-graphql';
import { CharaIdentity } from '../entities/CharaIdentity';

@Resolver()
export class CharaIdentityResolver {
  @Query(() => [CharaIdentity])
  CharaIdentity() {
    return CharaIdentity.find();
  }
}
