import { Resolver, Query } from 'type-graphql';
import { UekSpineAnimLink } from '../entities/UekSpineAnimLink';

@Resolver()
export class UekSpineAnimLinkResolver {
  @Query(() => [UekSpineAnimLink])
  UekSpineAnimLink() {
    return UekSpineAnimLink.find();
  }
}
