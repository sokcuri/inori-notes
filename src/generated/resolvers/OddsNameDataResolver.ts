import { Resolver, Query } from 'type-graphql';
import { OddsNameData } from '../models/OddsNameData';

@Resolver()
export class OddsNameDataResolver {
  @Query(() => [OddsNameData])
  OddsNameData() {
    return OddsNameData.find();
  }
}
