import { Resolver, Query } from 'type-graphql';
import { AilmentData } from '../models/AilmentData';

@Resolver()
export class AilmentDataResolver {
  @Query(() => [AilmentData])
  AilmentData() {
    return AilmentData.find();
  }
}
