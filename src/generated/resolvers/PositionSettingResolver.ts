import { Resolver, Query } from 'type-graphql';
import { PositionSetting } from '../entities/PositionSetting';

@Resolver()
export class PositionSettingResolver {
  @Query(() => [PositionSetting])
  PositionSetting() {
    return PositionSetting.find();
  }
}
