import { Resolver, Query } from 'type-graphql';
import { HatsuneQuiz } from '../models/HatsuneQuiz';

@Resolver()
export class HatsuneQuizResolver {
  @Query(() => [HatsuneQuiz])
  HatsuneQuiz() {
    return HatsuneQuiz.find();
  }
}
