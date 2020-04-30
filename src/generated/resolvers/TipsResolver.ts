import { Resolver, Query } from 'type-graphql';
import { Tips } from '../models/Tips';

@Resolver()
export class TipsResolver {
  @Query(() => [Tips])
  Tips() {
    return Tips.find();
  }
}
