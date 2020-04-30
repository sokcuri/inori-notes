import { Resolver, Query } from 'type-graphql';
import { LoginBonusAdv } from '../models/LoginBonusAdv';

@Resolver()
export class LoginBonusAdvResolver {
  @Query(() => [LoginBonusAdv])
  LoginBonusAdv() {
    return LoginBonusAdv.find();
  }
}
