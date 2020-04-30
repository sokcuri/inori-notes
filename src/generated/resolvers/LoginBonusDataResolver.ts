import { Resolver, Query } from 'type-graphql';
import { LoginBonusData } from '../models/LoginBonusData';

@Resolver()
export class LoginBonusDataResolver {
  @Query(() => [LoginBonusData])
  LoginBonusData() {
    return LoginBonusData.find();
  }
}
