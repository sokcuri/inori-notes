import { Resolver, Query } from 'type-graphql';
import { HatsuneBgChange } from '../models/HatsuneBgChange';

@Resolver()
export class HatsuneBgChangeResolver {
  @Query(() => [HatsuneBgChange])
  HatsuneBgChange() {
    return HatsuneBgChange.find();
  }
}
