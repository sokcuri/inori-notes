import { Resolver, Query } from 'type-graphql';
import { MusicList } from '../entities/MusicList';

@Resolver()
export class MusicListResolver {
  @Query(() => [MusicList])
  MusicList() {
    return MusicList.find();
  }
}
