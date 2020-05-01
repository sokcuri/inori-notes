import { Resolver, Query } from 'type-graphql';
import { MusicContent } from '../entities/MusicContent';

@Resolver()
export class MusicContentResolver {
  @Query(() => [MusicContent])
  MusicContent() {
    return MusicContent.find();
  }
}
