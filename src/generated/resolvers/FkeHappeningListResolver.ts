import { Resolver, Query } from 'type-graphql';
import { FkeHappeningList } from '../entities/FkeHappeningList';

@Resolver()
export class FkeHappeningListResolver {
  @Query(() => [FkeHappeningList])
  FkeHappeningList() {
    return FkeHappeningList.find();
  }
}
