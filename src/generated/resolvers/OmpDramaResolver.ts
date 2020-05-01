import { Resolver, Query } from 'type-graphql';
import { OmpDrama } from '../entities/OmpDrama';

@Resolver()
export class OmpDramaResolver {
  @Query(() => [OmpDrama])
  OmpDrama() {
    return OmpDrama.find();
  }
}
