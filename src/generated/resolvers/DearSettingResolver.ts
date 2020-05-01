import { Resolver, Query } from 'type-graphql';
import { DearSetting } from '../entities/DearSetting';

@Resolver()
export class DearSettingResolver {
  @Query(() => [DearSetting])
  DearSetting() {
    return DearSetting.find();
  }
}
