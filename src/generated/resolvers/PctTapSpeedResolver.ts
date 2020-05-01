import { Resolver, Query } from 'type-graphql';
import { PctTapSpeed } from '../entities/PctTapSpeed';

@Resolver()
export class PctTapSpeedResolver {
  @Query(() => [PctTapSpeed])
  PctTapSpeed() {
    return PctTapSpeed.find();
  }
}
