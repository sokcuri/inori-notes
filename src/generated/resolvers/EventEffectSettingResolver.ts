import { Resolver, Query } from 'type-graphql';
import { EventEffectSetting } from '../models/EventEffectSetting';

@Resolver()
export class EventEffectSettingResolver {
  @Query(() => [EventEffectSetting])
  EventEffectSetting() {
    return EventEffectSetting.find();
  }
}
