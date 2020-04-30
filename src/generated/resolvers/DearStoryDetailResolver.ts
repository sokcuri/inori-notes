import { Resolver, Query } from 'type-graphql';
import { DearStoryDetail } from '../models/DearStoryDetail';

@Resolver()
export class DearStoryDetailResolver {
  @Query(() => [DearStoryDetail])
  DearStoryDetail() {
    return DearStoryDetail.find();
  }
}
