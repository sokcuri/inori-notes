import { Resolver, Query } from 'type-graphql';
import { MusicList } from '../models/MusicList';

@Resolver()
export class MusicListResolver {
  @Query(() => [MusicList])
  MusicList() {
    return MusicList.find();
  }
}
