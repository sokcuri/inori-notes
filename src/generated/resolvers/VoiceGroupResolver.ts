import { Resolver, Query } from 'type-graphql';
import { VoiceGroup } from '../models/VoiceGroup';

@Resolver()
export class VoiceGroupResolver {
  @Query(() => [VoiceGroup])
  VoiceGroup() {
    return VoiceGroup.find();
  }
}
