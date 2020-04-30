import { Resolver, Query } from 'type-graphql';
import { LoveChara } from '../models/LoveChara';

@Resolver()
export class LoveCharaResolver {
  @Query(() => [LoveChara])
  LoveChara() {
    return LoveChara.find();
  }
}
