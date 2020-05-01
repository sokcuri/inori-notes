import { Resolver, Query } from 'type-graphql';
import { LoginBonusMessageData } from '../entities/LoginBonusMessageData';

@Resolver()
export class LoginBonusMessageDataResolver {
  @Query(() => [LoginBonusMessageData])
  LoginBonusMessageData() {
    return LoginBonusMessageData.find();
  }
}
