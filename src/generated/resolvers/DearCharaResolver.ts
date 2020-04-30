import { Resolver, Query } from 'type-graphql';
import { DearChara } from '../models/DearChara';

@Resolver()
export class DearCharaResolver {
  @Query(() => [DearChara])
  DearChara() {
    return DearChara.find();
  }
}
