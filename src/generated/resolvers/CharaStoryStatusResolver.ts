import { Resolver, Query } from 'type-graphql';
import { CharaStoryStatus } from '../entities/CharaStoryStatus';

@Resolver()
export class CharaStoryStatusResolver {
  @Query(() => [CharaStoryStatus])
  CharaStoryStatus() {
    return CharaStoryStatus.find();
  }
}
