import { Resolver, Query } from 'type-graphql';
import { TtkDrama } from '../entities/TtkDrama';

@Resolver()
export class TtkDramaResolver {
  @Query(() => [TtkDrama])
  TtkDrama() {
    return TtkDrama.find();
  }
}
