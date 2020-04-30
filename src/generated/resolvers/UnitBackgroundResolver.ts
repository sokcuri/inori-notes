import { Resolver, Query } from 'type-graphql';
import { UnitBackground } from '../models/UnitBackground';

@Resolver()
export class UnitBackgroundResolver {
  @Query(() => [UnitBackground])
  UnitBackground() {
    return UnitBackground.find();
  }
}
