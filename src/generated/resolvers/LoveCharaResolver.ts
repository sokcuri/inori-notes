import { Resolver, Query } from 'type-graphql';
import { LoveChara } from '../entities/LoveChara';

@Resolver()
export class LoveCharaResolver {
  @Query(() => [LoveChara])
  LoveChara() {
    return LoveChara.find();
  }
}
