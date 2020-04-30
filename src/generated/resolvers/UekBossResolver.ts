import { Resolver, Query } from 'type-graphql';
import { UekBoss } from '../models/UekBoss';

@Resolver()
export class UekBossResolver {
  @Query(() => [UekBoss])
  UekBoss() {
    return UekBoss.find();
  }
}
