import { Resolver, Query } from 'type-graphql';
import { CharaIdentity } from '../models/CharaIdentity';

@Resolver()
export class CharaIdentityResolver {
  @Query(() => [CharaIdentity])
  CharaIdentity() {
    return CharaIdentity.find();
  }
}
