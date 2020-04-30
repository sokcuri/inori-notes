import { Resolver, Query } from 'type-graphql';
import { TtkScore } from '../models/TtkScore';

@Resolver()
export class TtkScoreResolver {
  @Query(() => [TtkScore])
  TtkScore() {
    return TtkScore.find();
  }
}
