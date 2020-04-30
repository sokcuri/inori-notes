import { Resolver, Query } from 'type-graphql';
import { FkeHappeningList } from '../models/FkeHappeningList';

@Resolver()
export class FkeHappeningListResolver {
  @Query(() => [FkeHappeningList])
  FkeHappeningList() {
    return FkeHappeningList.find();
  }
}
