import { Resolver, Query } from 'type-graphql';
import { CharacterLoveRankupText } from '../entities/CharacterLoveRankupText';

@Resolver()
export class CharacterLoveRankupTextResolver {
  @Query(() => [CharacterLoveRankupText])
  CharacterLoveRankupText() {
    return CharacterLoveRankupText.find();
  }
}
