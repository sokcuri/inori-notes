import { Resolver, Query } from 'type-graphql';
import { ClanprofileContent } from '../entities/ClanprofileContent';

@Resolver()
export class ClanprofileContentResolver {
  @Query(() => [ClanprofileContent])
  ClanprofileContent() {
    return ClanprofileContent.find();
  }
}
