import { Resolver, Query } from 'type-graphql';
import { OmpDrama } from '../models/OmpDrama';

@Resolver()
export class OmpDramaResolver {
  @Query(() => [OmpDrama])
  OmpDrama() {
    return OmpDrama.find();
  }
}
