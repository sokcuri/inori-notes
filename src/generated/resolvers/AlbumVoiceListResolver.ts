import { Resolver, Query } from 'type-graphql';
import { AlbumVoiceList } from '../models/AlbumVoiceList';

@Resolver()
export class AlbumVoiceListResolver {
  @Query(() => [AlbumVoiceList])
  AlbumVoiceList() {
    return AlbumVoiceList.find();
  }
}
