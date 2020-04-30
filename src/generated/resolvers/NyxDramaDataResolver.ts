import { Resolver, Query } from 'type-graphql';
import { NyxDramaData } from '../models/NyxDramaData';

@Resolver()
export class NyxDramaDataResolver {
  @Query(() => [NyxDramaData])
  NyxDramaData() {
    return NyxDramaData.find();
  }
}
