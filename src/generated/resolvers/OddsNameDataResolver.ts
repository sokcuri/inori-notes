import { Resolver, Query } from 'type-graphql';
import { OddsNameData } from '../entities/OddsNameData';

@Resolver()
export class OddsNameDataResolver {
  @Query(() => [OddsNameData])
  OddsNameData() {
    return OddsNameData.find();
  }
}
