import { Resolver, Query } from 'type-graphql';
import { ResistData } from '../entities/ResistData';

@Resolver()
export class ResistDataResolver {
  @Query(() => [ResistData])
  ResistData() {
    return ResistData.find();
  }
}
