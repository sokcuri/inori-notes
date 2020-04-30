import { Resolver, Query } from 'type-graphql';
import { PositionSetting } from '../models/PositionSetting';

@Resolver()
export class PositionSettingResolver {
  @Query(() => [PositionSetting])
  PositionSetting() {
    return PositionSetting.find();
  }
}
