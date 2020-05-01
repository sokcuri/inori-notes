import { Resolver, Query } from 'type-graphql';
import { HatsuneDiarySetting } from '../entities/HatsuneDiarySetting';

@Resolver()
export class HatsuneDiarySettingResolver {
  @Query(() => [HatsuneDiarySetting])
  HatsuneDiarySetting() {
    return HatsuneDiarySetting.find();
  }
}
