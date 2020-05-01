import { Resolver, Query } from 'type-graphql';
import { UekDrama } from '../entities/UekDrama';

@Resolver()
export class UekDramaResolver {
  @Query(() => [UekDrama])
  UekDrama() {
    return UekDrama.find();
  }
}
