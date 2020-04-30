import { Resolver, Query } from 'type-graphql';
import { EnemyEnableVoice } from '../models/EnemyEnableVoice';

@Resolver()
export class EnemyEnableVoiceResolver {
  @Query(() => [EnemyEnableVoice])
  EnemyEnableVoice() {
    return EnemyEnableVoice.find();
  }
}
