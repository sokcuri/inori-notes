// src/resolvers/BookResolver.ts

import { Resolver, Query } from 'type-graphql';

@Resolver()
export class UnitDataResolver {
  @Query(() => String)
  hello() {
    return "world";
  }
}
