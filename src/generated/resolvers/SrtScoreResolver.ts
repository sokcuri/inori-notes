import { Resolver, Query } from 'type-graphql';
import { SrtScore } from '../entities/SrtScore';

@Resolver()
export class SrtScoreResolver {
  @Query(() => [SrtScore])
  SrtScore() {
    return SrtScore.find();
  }
}
