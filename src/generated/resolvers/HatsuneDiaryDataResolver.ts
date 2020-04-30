import { Resolver, Query } from 'type-graphql';
import { HatsuneDiaryData } from '../models/HatsuneDiaryData';

@Resolver()
export class HatsuneDiaryDataResolver {
  @Query(() => [HatsuneDiaryData])
  HatsuneDiaryData() {
    return HatsuneDiaryData.find();
  }
}
