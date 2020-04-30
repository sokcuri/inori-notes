import { Resolver, Query } from 'type-graphql';
import { HatsuneBgChangeData } from '../models/HatsuneBgChangeData';

@Resolver()
export class HatsuneBgChangeDataResolver {
  @Query(() => [HatsuneBgChangeData])
  HatsuneBgChangeData() {
    return HatsuneBgChangeData.find();
  }
}
