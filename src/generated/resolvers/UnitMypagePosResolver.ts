import { Resolver, Query } from 'type-graphql';
import { UnitMypagePos } from '../models/UnitMypagePos';

@Resolver()
export class UnitMypagePosResolver {
  @Query(() => [UnitMypagePos])
  UnitMypagePos() {
    return UnitMypagePos.find();
  }
}
