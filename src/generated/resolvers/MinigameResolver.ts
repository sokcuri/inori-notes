import { Resolver, Query } from 'type-graphql';
import { Minigame } from '../entities/Minigame';

@Resolver()
export class MinigameResolver {
  @Query(() => [Minigame])
  Minigame() {
    return Minigame.find();
  }
}
