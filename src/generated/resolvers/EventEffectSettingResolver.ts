import { Resolver, Query } from 'type-graphql';
import { EventEffectSetting } from '../entities/EventEffectSetting';

@Resolver()
export class EventEffectSettingResolver {
  @Query(() => [EventEffectSetting])
  EventEffectSetting() {
    return EventEffectSetting.find();
  }
}
