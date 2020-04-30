import { Resolver, Query } from 'type-graphql';
import { HatsuneDescription } from '../models/HatsuneDescription';

@Resolver()
export class HatsuneDescriptionResolver {
  @Query(() => [HatsuneDescription])
  HatsuneDescription() {
    return HatsuneDescription.find();
  }
}
