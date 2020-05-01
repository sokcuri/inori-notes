import { Resolver, Query } from 'type-graphql';
import { HatsuneDiaryData } from '../entities/HatsuneDiaryData';

@Resolver()
export class HatsuneDiaryDataResolver {
  @Query(() => [HatsuneDiaryData])
  HatsuneDiaryData() {
    return HatsuneDiaryData.find();
  }
}
