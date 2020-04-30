import { Resolver, Query } from 'type-graphql';
import { ClanInviteLevelGroup } from '../models/ClanInviteLevelGroup';

@Resolver()
export class ClanInviteLevelGroupResolver {
  @Query(() => [ClanInviteLevelGroup])
  ClanInviteLevelGroup() {
    return ClanInviteLevelGroup.find();
  }
}
