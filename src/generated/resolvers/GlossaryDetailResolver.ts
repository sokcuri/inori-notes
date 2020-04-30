import { Resolver, Query } from 'type-graphql';
import { GlossaryDetail } from '../models/GlossaryDetail';

@Resolver()
export class GlossaryDetailResolver {
  @Query(() => [GlossaryDetail])
  GlossaryDetail() {
    return GlossaryDetail.find();
  }
}
