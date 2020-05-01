import { Resolver, Query } from 'type-graphql';
import { VoteUnit } from '../entities/VoteUnit';

@Resolver()
export class VoteUnitResolver {
  @Query(() => [VoteUnit])
  VoteUnit() {
    return VoteUnit.find();
  }
}
