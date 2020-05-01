import { Resolver, Query } from 'type-graphql';
import { AilmentData } from '../entities/AilmentData';

@Resolver()
export class AilmentDataResolver {
  @Query(() => [AilmentData])
  AilmentData() {
    return AilmentData.find();
  }
}
