import { Resolver, Query } from 'type-graphql';
import { HatsuneDescription } from '../entities/HatsuneDescription';

@Resolver()
export class HatsuneDescriptionResolver {
  @Query(() => [HatsuneDescription])
  HatsuneDescription() {
    return HatsuneDescription.find();
  }
}
