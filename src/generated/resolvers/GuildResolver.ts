import { Resolver, Query } from 'type-graphql';
import { Guild } from '../entities/Guild';

@Resolver()
export class GuildResolver {
  @Query(() => [Guild])
  Guild() {
    return Guild.find();
  }
}
