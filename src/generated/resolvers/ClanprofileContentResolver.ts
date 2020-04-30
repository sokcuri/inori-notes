import { Resolver, Query } from 'type-graphql';
import { ClanprofileContent } from '../models/ClanprofileContent';

@Resolver()
export class ClanprofileContentResolver {
  @Query(() => [ClanprofileContent])
  ClanprofileContent() {
    return ClanprofileContent.find();
  }
}
