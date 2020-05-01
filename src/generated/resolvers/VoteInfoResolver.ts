import { Resolver, Query } from 'type-graphql';
import { VoteInfo } from '../entities/VoteInfo';

@Resolver()
export class VoteInfoResolver {
  @Query(() => [VoteInfo])
  VoteInfo() {
    return VoteInfo.find();
  }
}
