import { Resolver, Query } from 'type-graphql';
import { BirthdayLoginBonusDetail } from '../models/BirthdayLoginBonusDetail';

@Resolver()
export class BirthdayLoginBonusDetailResolver {
  @Query(() => [BirthdayLoginBonusDetail])
  BirthdayLoginBonusDetail() {
    return BirthdayLoginBonusDetail.find();
  }
}
