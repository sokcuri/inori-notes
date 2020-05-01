import { Resolver, Query } from 'type-graphql';
import { PctGamingMotion } from '../entities/PctGamingMotion';

@Resolver()
export class PctGamingMotionResolver {
  @Query(() => [PctGamingMotion])
  PctGamingMotion() {
    return PctGamingMotion.find();
  }
}
