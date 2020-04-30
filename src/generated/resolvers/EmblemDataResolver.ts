import { Resolver, Query } from 'type-graphql';
import { EmblemData } from '../models/EmblemData';

@Resolver()
export class EmblemDataResolver {
  @Query(() => [EmblemData])
  EmblemData() {
    return EmblemData.find();
  }
}
