import { Resolver, Query } from 'type-graphql';
import { UnitIntroduction } from '../entities/UnitIntroduction';

@Resolver()
export class UnitIntroductionResolver {
  @Query(() => [UnitIntroduction])
  UnitIntroduction() {
    return UnitIntroduction.find();
  }
}
