import { Resolver, Query } from 'type-graphql';
import { DearSetting } from '../models/DearSetting';

@Resolver()
export class DearSettingResolver {
  @Query(() => [DearSetting])
  DearSetting() {
    return DearSetting.find();
  }
}
