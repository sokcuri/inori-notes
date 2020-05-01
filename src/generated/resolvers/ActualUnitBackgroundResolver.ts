import { Resolver, Query } from 'type-graphql';
import { ActualUnitBackground } from '../entities/ActualUnitBackground';

@Resolver()
export class ActualUnitBackgroundResolver {
  @Query(() => [ActualUnitBackground])
  ActualUnitBackground() {
    return ActualUnitBackground.find();
  }
}
