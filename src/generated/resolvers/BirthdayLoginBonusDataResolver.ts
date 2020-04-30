import { Resolver, Query } from 'type-graphql';
import { BirthdayLoginBonusData } from '../models/BirthdayLoginBonusData';

@Resolver()
export class BirthdayLoginBonusDataResolver {
  @Query(() => [BirthdayLoginBonusData])
  BirthdayLoginBonusData() {
    return BirthdayLoginBonusData.find();
  }
}
