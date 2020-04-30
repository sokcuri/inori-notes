import { Resolver, Query } from 'type-graphql';
import { ArcadeList } from '../models/ArcadeList';

@Resolver()
export class ArcadeListResolver {
  @Query(() => [ArcadeList])
  ArcadeList() {
    return ArcadeList.find();
  }
}
