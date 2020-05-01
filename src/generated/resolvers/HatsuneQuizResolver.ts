import { Resolver, Query } from 'type-graphql';
import { HatsuneQuiz } from '../entities/HatsuneQuiz';

@Resolver()
export class HatsuneQuizResolver {
  @Query(() => [HatsuneQuiz])
  HatsuneQuiz() {
    return HatsuneQuiz.find();
  }
}
