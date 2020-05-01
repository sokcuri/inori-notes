import { Resolver, Query } from 'type-graphql';
import { BirthdayLoginBonusData } from '../entities/BirthdayLoginBonusData';

@Resolver()
export class BirthdayLoginBonusDataResolver {
  @Query(() => [BirthdayLoginBonusData])
  BirthdayLoginBonusData() {
    return BirthdayLoginBonusData.find();
  }
}
