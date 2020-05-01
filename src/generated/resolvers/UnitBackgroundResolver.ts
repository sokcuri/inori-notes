import { Resolver, Query } from 'type-graphql';
import { UnitBackground } from '../entities/UnitBackground';

@Resolver()
export class UnitBackgroundResolver {
  @Query(() => [UnitBackground])
  UnitBackground() {
    return UnitBackground.find();
  }
}
