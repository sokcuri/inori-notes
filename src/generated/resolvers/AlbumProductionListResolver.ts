import { Resolver, Query } from 'type-graphql';
import { AlbumProductionList } from '../entities/AlbumProductionList';

@Resolver()
export class AlbumProductionListResolver {
  @Query(() => [AlbumProductionList])
  AlbumProductionList() {
    return AlbumProductionList.find();
  }
}
