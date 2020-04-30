import { Resolver, Query } from 'type-graphql';
import { UnitIntroduction } from '../models/UnitIntroduction';

@Resolver()
export class UnitIntroductionResolver {
  @Query(() => [UnitIntroduction])
  UnitIntroduction() {
    return UnitIntroduction.find();
  }
}
