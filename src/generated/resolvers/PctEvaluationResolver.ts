import { Resolver, Query } from 'type-graphql';
import { PctEvaluation } from '../entities/PctEvaluation';

@Resolver()
export class PctEvaluationResolver {
  @Query(() => [PctEvaluation])
  PctEvaluation() {
    return PctEvaluation.find();
  }
}
