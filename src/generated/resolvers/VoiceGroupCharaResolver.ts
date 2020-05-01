import { Resolver, Query } from 'type-graphql';
import { VoiceGroupChara } from '../entities/VoiceGroupChara';

@Resolver()
export class VoiceGroupCharaResolver {
  @Query(() => [VoiceGroupChara])
  VoiceGroupChara() {
    return VoiceGroupChara.find();
  }
}
