import { Resolver, Query } from 'type-graphql';
import { ProfileFrame } from '../entities/ProfileFrame';

@Resolver()
export class ProfileFrameResolver {
  @Query(() => [ProfileFrame])
  ProfileFrame() {
    return ProfileFrame.find();
  }
}
