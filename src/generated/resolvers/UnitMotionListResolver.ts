import { Resolver, Query } from 'type-graphql';
import { UnitMotionList } from '../models/UnitMotionList';

@Resolver()
export class UnitMotionListResolver {
  @Query(() => [UnitMotionList])
  UnitMotionList() {
    return UnitMotionList.find();
  }
}
