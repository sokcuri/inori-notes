import { Resolver, Query } from 'type-graphql';
import { EnemyMParts } from '../entities/EnemyMParts';

@Resolver()
export class EnemyMPartsResolver {
  @Query(() => [EnemyMParts])
  EnemyMParts() {
    return EnemyMParts.find();
  }
}
