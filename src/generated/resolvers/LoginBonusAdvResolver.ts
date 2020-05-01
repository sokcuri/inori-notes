import { Resolver, Query } from 'type-graphql';
import { LoginBonusAdv } from '../entities/LoginBonusAdv';

@Resolver()
export class LoginBonusAdvResolver {
  @Query(() => [LoginBonusAdv])
  LoginBonusAdv() {
    return LoginBonusAdv.find();
  }
}
