import { Resolver, Query } from 'type-graphql';
import { ProfileFrame } from '../models/ProfileFrame';

@Resolver()
export class ProfileFrameResolver {
  @Query(() => [ProfileFrame])
  ProfileFrame() {
    return ProfileFrame.find();
  }
}
