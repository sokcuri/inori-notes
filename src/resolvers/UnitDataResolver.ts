// src/resolvers/BookResolver.ts

import { Resolver, Query } from 'type-graphql';
import { UnitData } from '../models/UnitData';

@Resolver()
export class UnitDataResolver {
  @Query(() => [UnitData])
  UnitData() {
    return UnitData.find();
  }

  @Query(() => String)
  hello() {
    return "world";
  }
}
