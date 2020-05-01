import { Resolver, Query } from 'type-graphql';
import { ShioriQuest } from '../entities/ShioriQuest';

@Resolver()
export class ShioriQuestResolver {
  @Query(() => [ShioriQuest])
  ShioriQuest() {
    return ShioriQuest.find();
  }
}
