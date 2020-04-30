import { Resolver, Query } from 'type-graphql';
import { ShioriQuestArea } from '../models/ShioriQuestArea';

@Resolver()
export class ShioriQuestAreaResolver {
  @Query(() => [ShioriQuestArea])
  ShioriQuestArea() {
    return ShioriQuestArea.find();
  }
}
