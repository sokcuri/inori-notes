import { Resolver, Query } from 'type-graphql';
import { KaiserQuestData } from '../models/KaiserQuestData';

@Resolver()
export class KaiserQuestDataResolver {
  @Query(() => [KaiserQuestData])
  KaiserQuestData() {
    return KaiserQuestData.find();
  }
}
