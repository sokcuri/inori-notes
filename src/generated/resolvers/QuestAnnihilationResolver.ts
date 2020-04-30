import { Resolver, Query } from 'type-graphql';
import { QuestAnnihilation } from '../models/QuestAnnihilation';

@Resolver()
export class QuestAnnihilationResolver {
  @Query(() => [QuestAnnihilation])
  QuestAnnihilation() {
    return QuestAnnihilation.find();
  }
}
