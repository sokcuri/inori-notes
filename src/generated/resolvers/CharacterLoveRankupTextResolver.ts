import { Resolver, Query } from 'type-graphql';
import { CharacterLoveRankupText } from '../models/CharacterLoveRankupText';

@Resolver()
export class CharacterLoveRankupTextResolver {
  @Query(() => [CharacterLoveRankupText])
  CharacterLoveRankupText() {
    return CharacterLoveRankupText.find();
  }
}
