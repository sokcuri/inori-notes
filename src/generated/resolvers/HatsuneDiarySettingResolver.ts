import { Resolver, Query } from 'type-graphql';
import { HatsuneDiarySetting } from '../models/HatsuneDiarySetting';

@Resolver()
export class HatsuneDiarySettingResolver {
  @Query(() => [HatsuneDiarySetting])
  HatsuneDiarySetting() {
    return HatsuneDiarySetting.find();
  }
}
