import { Resolver, Query } from 'type-graphql';
import { HatsuneQuestArea } from '../entities/HatsuneQuestArea';

@Resolver()
export class HatsuneQuestAreaResolver {
  @Query(() => [HatsuneQuestArea])
  HatsuneQuestArea() {
    return HatsuneQuestArea.find();
  }
}
