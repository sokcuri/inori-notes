import { Resolver, Query } from 'type-graphql';
import { UnlockRarity6 } from '../entities/UnlockRarity6';

@Resolver()
export class UnlockRarity6Resolver {
  @Query(() => [UnlockRarity6])
  UnlockRarity6() {
    return UnlockRarity6.find();
  }
}
