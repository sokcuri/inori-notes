import { Resolver, Query } from 'type-graphql';
import { SekaiAddTimesData } from '../models/SekaiAddTimesData';

@Resolver()
export class SekaiAddTimesDataResolver {
  @Query(() => [SekaiAddTimesData])
  SekaiAddTimesData() {
    return SekaiAddTimesData.find();
  }
}
