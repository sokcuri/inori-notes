import { Resolver, Query } from 'type-graphql';
import { BirthdayLoginBonusDetail } from '../entities/BirthdayLoginBonusDetail';

@Resolver()
export class BirthdayLoginBonusDetailResolver {
  @Query(() => [BirthdayLoginBonusDetail])
  BirthdayLoginBonusDetail() {
    return BirthdayLoginBonusDetail.find();
  }
}
