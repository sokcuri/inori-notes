import { Resolver, Query } from 'type-graphql';
import { UnitMotionList } from '../entities/UnitMotionList';

@Resolver()
export class UnitMotionListResolver {
  @Query(() => [UnitMotionList])
  UnitMotionList() {
    return UnitMotionList.find();
  }
}
