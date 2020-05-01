import { Resolver, Query } from 'type-graphql';
import { KaiserAddTimesData } from '../entities/KaiserAddTimesData';

@Resolver()
export class KaiserAddTimesDataResolver {
  @Query(() => [KaiserAddTimesData])
  KaiserAddTimesData() {
    return KaiserAddTimesData.find();
  }
}
