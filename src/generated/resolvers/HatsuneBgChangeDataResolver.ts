import { Resolver, Query } from 'type-graphql';
import { HatsuneBgChangeData } from '../entities/HatsuneBgChangeData';

@Resolver()
export class HatsuneBgChangeDataResolver {
  @Query(() => [HatsuneBgChangeData])
  HatsuneBgChangeData() {
    return HatsuneBgChangeData.find();
  }
}
