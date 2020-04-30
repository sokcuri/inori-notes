import { Resolver, Query } from 'type-graphql';
import { SrtScore } from '../models/SrtScore';

@Resolver()
export class SrtScoreResolver {
  @Query(() => [SrtScore])
  SrtScore() {
    return SrtScore.find();
  }
}
