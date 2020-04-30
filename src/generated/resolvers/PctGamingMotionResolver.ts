import { Resolver, Query } from 'type-graphql';
import { PctGamingMotion } from '../models/PctGamingMotion';

@Resolver()
export class PctGamingMotionResolver {
  @Query(() => [PctGamingMotion])
  PctGamingMotion() {
    return PctGamingMotion.find();
  }
}
