import { Resolver, Query } from 'type-graphql';
import { VoteData } from '../entities/VoteData';

@Resolver()
export class VoteDataResolver {
  @Query(() => [VoteData])
  VoteData() {
    return VoteData.find();
  }
}
