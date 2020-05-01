import { Resolver, Query } from 'type-graphql';
import { GlossaryDetail } from '../entities/GlossaryDetail';

@Resolver()
export class GlossaryDetailResolver {
  @Query(() => [GlossaryDetail])
  GlossaryDetail() {
    return GlossaryDetail.find();
  }
}
