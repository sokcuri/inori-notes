import { Resolver, Query } from 'type-graphql';
import { ClanBattleBossGroup } from '../entities/ClanBattleBossGroup';

@Resolver()
export class ClanBattleBossGroupResolver {
  @Query(() => [ClanBattleBossGroup])
  ClanBattleBossGroup() {
    return ClanBattleBossGroup.find();
  }
}
