import { Resolver, Query } from 'type-graphql';
import { CharaStoryStatus } from '../models/CharaStoryStatus';

@Resolver()
export class CharaStoryStatusResolver {
  @Query(() => [CharaStoryStatus])
  CharaStoryStatus() {
    return CharaStoryStatus.find();
  }
}
