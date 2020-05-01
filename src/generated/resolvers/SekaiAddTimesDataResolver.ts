import { Resolver, Query } from 'type-graphql';
import { SekaiAddTimesData } from '../entities/SekaiAddTimesData';

@Resolver()
export class SekaiAddTimesDataResolver {
  @Query(() => [SekaiAddTimesData])
  SekaiAddTimesData() {
    return SekaiAddTimesData.find();
  }
}
