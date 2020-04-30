import { Resolver, Query } from 'type-graphql';
import { ClanCostGroup } from '../models/ClanCostGroup';

@Resolver()
export class ClanCostGroupResolver {
  @Query(() => [ClanCostGroup])
  ClanCostGroup() {
    return ClanCostGroup.find();
  }
}
