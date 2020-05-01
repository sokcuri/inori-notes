import { Resolver, Query } from 'type-graphql';
import { QuestAnnihilation } from '../entities/QuestAnnihilation';

@Resolver()
export class QuestAnnihilationResolver {
  @Query(() => [QuestAnnihilation])
  QuestAnnihilation() {
    return QuestAnnihilation.find();
  }
}
