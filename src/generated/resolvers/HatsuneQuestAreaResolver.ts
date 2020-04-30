import { Resolver, Query } from 'type-graphql';
import { HatsuneQuestArea } from '../models/HatsuneQuestArea';

@Resolver()
export class HatsuneQuestAreaResolver {
  @Query(() => [HatsuneQuestArea])
  HatsuneQuestArea() {
    return HatsuneQuestArea.find();
  }
}
