import { Resolver, Query } from 'type-graphql';
import { KaiserAddTimesData } from '../models/KaiserAddTimesData';

@Resolver()
export class KaiserAddTimesDataResolver {
  @Query(() => [KaiserAddTimesData])
  KaiserAddTimesData() {
    return KaiserAddTimesData.find();
  }
}
