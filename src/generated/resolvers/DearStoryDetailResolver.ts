import { Resolver, Query } from 'type-graphql';
import { DearStoryDetail } from '../entities/DearStoryDetail';

@Resolver()
export class DearStoryDetailResolver {
  @Query(() => [DearStoryDetail])
  DearStoryDetail() {
    return DearStoryDetail.find();
  }
}
