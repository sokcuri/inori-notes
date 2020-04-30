import { Resolver, Query } from 'type-graphql';
import { UekSpineAnimLink } from '../models/UekSpineAnimLink';

@Resolver()
export class UekSpineAnimLinkResolver {
  @Query(() => [UekSpineAnimLink])
  UekSpineAnimLink() {
    return UekSpineAnimLink.find();
  }
}
